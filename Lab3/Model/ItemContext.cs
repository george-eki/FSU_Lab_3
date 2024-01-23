using Microsoft.EntityFrameworkCore;

namespace Lab3.Model
{
    public class ItemContext : DbContext
    {
        public DbSet<Item> items { get; set; }
        public ItemContext(DbContextOptions<ItemContext>options) : base(options)
        {
            
        }
    }
}
