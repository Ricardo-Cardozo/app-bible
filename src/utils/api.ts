import axios from "axios";

export default axios.create({
  baseURL: "https://www.abibliadigital.com.br/api/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1vbiBKdWwgMTAgMjAyMyAxNjo1NzoxMyBHTVQrMDAwMC5hbGlzb25faWZAaG90bWFpbC5jb20iLCJpYXQiOjE2ODkwMDgyMzN9.tI1fCxYeC8MBBOGVjBJx5WeqFP2tOBsvKbCREM4Jalc",
  },
});

//verses/nvi/gn/1
