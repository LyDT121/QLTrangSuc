//using System;
//using System.Collections.Generic;
//using System.Text;
//using DAO.Interface;
//using System.Data;
//using OBJ;
//namespace DAO
//{
//    public class PricesDAO
//    {
//        DataHelper dh = new DataHelper();
//        public List<Prices> GetPrices()
//        {
//            DataTable dt = dh.FillDataTable("select * from Prices");
//            List<Prices> List_cate = new List<Prices>();
//            foreach (DataRow r in dt.Rows)
//            {
//                Prices fd = new Prices(r[0].ToString(), r[1].ToString(), r[2].ToString(), r[3].ToString(), r[4].ToString());
//                List_cate.Add(fd);
//            }
//            return List_cate;
//        }
//    }
//}
