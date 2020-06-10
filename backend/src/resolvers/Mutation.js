//when push and put data
const Mutations = {
  async createItem(parent, args, ctx, info){
        //  TODO: verify if they are logged in

        // get acces to the methods generated inside the prisma.graphql
        const item = await ctx.db.mutation.createItem({
            data:{
                ...args
            }
        }, info);
        console.log(item);
        
        return item
    }
};

module.exports = Mutations;
