using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace DAO
{
    public class DataHelper
    {
        string stcon;
        SqlConnection con;
        public DataHelper()
        {
            stcon = ConfigurationManager.ConnectionStrings["strconnect"].ConnectionString;
            con = new SqlConnection(stcon);
        }
        public DataTable FillDataTable(string sql)
        {
            SqlDataAdapter da = new SqlDataAdapter(sql, stcon);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public SqlDataReader StoreReaders(string tenStore, params object[] giatri)
        {
            SqlCommand cm;
            Open();
            try
            {
                cm = new SqlCommand(tenStore, con);
                cm.CommandType = CommandType.StoredProcedure;
                SqlCommandBuilder.DeriveParameters(cm);
                for (int i = 1; i < cm.Parameters.Count; i++)
                {
                    cm.Parameters[i].Value = giatri[i - 1];
                }
                SqlDataReader dr = cm.ExecuteReader();
                return dr;
            }
            catch
            { return null; }
        }
        public string Open()
        {
            try
            {
                if (con.State != ConnectionState.Open)
                {
                    con.Open();
                }
                return "";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }

        }
        public void Close()
        {
            if (con.State != ConnectionState.Closed)
                con.Close();
        }

    }
}
