import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./pages/LogIn";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Starship from "./pages/Starship";
import People from "./pages/People";
import Species from "./pages/Species";
import FilmDetails from "./pages/FilmDetails";
import StarshipDetails from "./pages/StarshipDetails";
import PeopleDetails from "./pages/PeopleDetails";
import SpeciesDetails from "./pages/SpeciesDetails";

const router = createBrowserRouter([
  { path: "/", element: <LogIn /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/starship", element: <Starship /> },
  { path: "/people", element: <People /> },
  { path: "/species", element: <Species /> },
  { path: "/filmdetails/:id", element: <FilmDetails /> },
  { path: "/starshipdetails/:id", element: <StarshipDetails /> },
  { path: "/peopledetails/:id", element: <PeopleDetails /> },
  { path: "/speciesdetails/:id", element: <SpeciesDetails /> },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
