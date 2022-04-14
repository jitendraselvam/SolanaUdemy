use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;

declare_id!("BdNmQ5EcuZQt3WfR6L6oRje8WhFH9pSjLnhnhUkapdy9"); //program ID

#[program] //create handlers for our program that other people can call
pub mod gifportal {
    use super::*;
    //Even though we have _ in rust but in JS we have camel casing. Anchor does this interanl;ly to follow best practices for respective languages
    pub fn start_stuff_off(ctx: Context<StartStuffOff>) -> ProgramResult { 
        let base_account = &mut ctx.accounts.base_account;
        base_account.total_gifs = 0;
        Ok(())
    }

    pub fn add_gif(ctx: Context<AddGif>, gif_link: String) -> ProgramResult {
        let base_account = &mut ctx.accounts.base_account;
        let user = &mut ctx.accounts.user;

        let item = ItemStruct {
            gif_link: gif_link.to_string(),
            user_address: *user.to_account_info().key
        };

        base_account.gif_list.push(item); // add item to the vector
        base_account.total_gifs +=1;
        Ok(())
    }

}

#[derive(Accounts)]
pub struct StartStuffOff<'info> {
    #[account(init, payer=user, space=9000)]
    pub base_account: Account<'info, BaseAccount>, // we would like to initilize the base account hence we have init method here
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System> //System program is used to run solana, some of the things it does is create accounts on Solana
}

#[derive(Accounts)]
pub struct AddGif<'info> {
    #[account(mut)]
    pub base_account: Account<'info, BaseAccount>,
    #[account(mut)]
    pub user: Signer<'info>
}

//This macro tells anchor how to serealize and deserialize since we have to store it in the account
#[derive(Debug, Clone, AnchorSerialize, AnchorDeserialize)]
pub struct ItemStruct {
    pub gif_link: String,
    pub user_address: Pubkey
}

#[account]
pub struct BaseAccount {
    pub total_gifs: u64,
    pub gif_list: Vec<ItemStruct>
}