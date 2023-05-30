import { useDispatch } from "react-redux"
import Cards from "../../Components/Cards/Cards"
import { useEffect } from "react";
import { getUsers } from "../../redux/actions/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      <Cards />
    </div>
  )
}

export default Home