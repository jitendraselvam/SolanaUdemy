use anchor_lang::solana_program::entrypoint::ProgramResult;
use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod mycalculatordapp {
    use super::*;
    //Functions usually have first arg as context.
    //It contains the accounts from which we get the data from since Solana is Stateless.
    pub fn create(ctx: Context<Create>, init_message: String) -> ProgramResult {
        let calculator = &mut ctx.accounts.calculator; //get calculator account from context
        calculator.greeting = init_message;
        Ok(())
    }

    pub fn add(ctx: Context<Addition>, num1: i64, num2: i64) -> ProgramResult {
        let calculator = &mut ctx.accounts.calculator; //get calculator account from context
        calculator.result = num1 + num2;
        Ok(())
    }
}

//Add accounts that can be retrieved from the Context for create
#[derive(Accounts)] // user derive macro to indicate that this is a context
pub struct Create<'info> {
    #[account(init, payer=user, space=264)] //create a new Calculator account, specify the payer. Space represents the amount of space required to store data for an account
    pub calculator: Account<'info, Calculator>,
    #[account(mut)] //mark user arg as mutable so we could write back data
    pub user: Signer<'info>, //user required to sign for the transaction
    pub system_program: Program<'info, System> //final arg thats required to create context
    //we dont user init for user / system_program since we dont create any new user / sys_pgm
}

//Create the context for Addition accounts
#[derive(Accounts)]
pub struct Addition<'info> {
    #[account(mut)]
    pub calculator: Account<'info, Calculator>
}

#[account] //define the Caluclator Account
pub struct Calculator {
    pub greeting: String,
    pub result: i64,
    pub remainder: i64
}