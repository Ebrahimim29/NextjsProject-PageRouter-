// import { router } from "json-server";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Admin = () => {
  const router = useRouter();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleGetData = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:4000/admin");
    const resData = await res.json();
    setData(resData);
    setLoading(false);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return loading ? (
    <h1 className="text-center text-2xl font-bold mt-5">Loading...</h1>
  ) : (
    <div className="container mx-auto mt-5">
      <Button className="mt-2" onClick={() => router.back()}>
        Back
      </Button>

      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-success p-1 m-1 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">sell</h2>
          <p className="text-2xl font-bold">{data.sell}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-info p-1 m-1 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Products</h2>
          <p className="text-2xl font-bold">{data.products}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-danger p-1 m-1 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Users</h2>
          <p className="text-2xl font-bold">{data.users}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-warning p-1 m-1 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Carts</h2>
          <p className="text-2xl font-bold">{data.carts}</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
