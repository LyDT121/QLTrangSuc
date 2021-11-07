using System;
using System.Collections.Generic;
using System.Text;
using OBJ;

namespace BUS.Interface
{
    public interface IDetailProducts
    {
        Products GetProducts(string ProductID);
    }
}
