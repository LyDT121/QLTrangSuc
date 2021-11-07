using System;
using System.Collections.Generic;
using System.Text;
using DAO;
using OBJ;
namespace BUS
{
    public class CategoryBUS : ICategory
    {
        CategoryDAO CategoryDAO = new CategoryDAO();
        public List<Category> GetCategory()
        {
            return CategoryDAO.GetCategory();
        }
    }
}
