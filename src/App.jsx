import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import BoshSahifa from "./pages/Home/BoshSahifa";
import MeyoriySahifa from "./pages/MeyoriyHuquqiyHujjatlar/MeyoriySahifa";
import Yangiliklar from "./pages/News/Yangiliklar";
import FanOqituvchi from "./pages/TalimStandartlari/FanOqituvchi/FanOqituvchi";
import OquvAmaliyot from "./pages/TalimStandartlari/OquvAmaliyot/OquvAmaliyot";
import OquvMateriallarToplami from "./pages/TalimStandartlari/OquvMateriallarToplami/OquvMateriallarToplami";
import TalimStandartDetail from "./pages/TalimStandartlari/TalimStandartDetail";
import TalimStandartSahifa from "./pages/TalimStandartlari/TalimStandartSahifa";
import UmumKasbiyDetail from "./pages/TalimStandartlari/UmumiyKasbiy/UmumKasbiyDetail";
import UmumiyKasbiy from "./pages/TalimStandartlari/UmumiyKasbiy/UmumiyKasbiy";
import { AdabiyotlarAll } from "./pages/adabiyotlar/adabiyotlarAll";
import { MalumotProvider } from "./pages/profil/components/contexts/editMalumotlarContext";
import { PortfolioProvider } from "./pages/profil/components/contexts/editPortfolioContext";
import { Profil } from "./pages/profil/profil";
import { RegisterTeacher } from "./pages/Auth/register/RegisterTeacher";
import { RegPortfolio } from "./pages/regPortfolio/regPortfolio";
import { RegTeacherFiles } from "./pages/regTeacherFiles/regTeacherFiles";
import { Loginn } from "./pages/Auth/login/Loginn";
import { RegParolTiklash } from "./pages/RegParolTiklashUnik/regParolTiklash";
import { RegKod } from "./pages/RegParolTiklashUnik/regKod";
import PrezidentFarmoni from "./pages/MeyoriyHuquqiyHujjatlar/PrezidentFarmoni";
import VazirlarQarori from "./pages/MeyoriyHuquqiyHujjatlar/VazirlarQarori";
import VazirlarBuyrugi from "./pages/MeyoriyHuquqiyHujjatlar/VazirlarBuyrugi";
import Nizomlar from "./pages/MeyoriyHuquqiyHujjatlar/Nizomlar";
import LayoutTalimStandart from "./pages/TalimStandartlari/LayoutTalimStandart";
import { MainAdabiyot } from "./pages/adabiyotlar/components/main/main";
import { BookBatafsil } from "./pages/adabiyotlar/components/main/bookBatafsil/bookBatafsil";
import YangiliklarDetail from "./pages/News/YangiliklarDetail";
import YangilikLayout from "./pages/News/YangilikLayout";
import Oops from "./components/oops/oops";
import { RegNewParol } from "./pages/RegParolTiklashUnik/regNewParol";
import DropDawnProfile from "./components/navbar/topNavbar/DropDawnProfile";
import MainLayouts from "./layouts/MainLayouts";
import { HududlarLayout, Viloyatlar, Tumanlar, Muassasalar, MuassasaMalumotiLayout } from "./pages/ProfessionalTalimMuassasalari";
import {UmumiyMalumotlar, MuassasaUstav, VasiylikKengash, PedagogTarkib, Rivojlanish, WorldSkills, WorldSkillsDetail, QisqaKurs, QisqaKursDetail, TayyorlanadiganKasb} from "./pages/ProfessionalTalimMuassasalari/collageDetails";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { RegisterSelect } from "./pages/Auth/register/RegisterSelect";
import { RegisterStudent } from "./pages/Auth/register/RegisterStudent";

function App() {
  const {auth} = useContext(AuthContext)
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute auth = {auth}>
          <MainLayouts />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <BoshSahifa />,
        },
        {
          path: "MeyoriySahifa",
          element: <MeyoriySahifa />,
          children: [
            {
              index: true,
              element: <PrezidentFarmoni />,
            },
            {
              path: "vazirlarQarori",
              element: <VazirlarQarori />,
            },
            {
              path: "vazirlarBuyrugi",
              element: <VazirlarBuyrugi />,
            },
            {
              path: "nizomlar",
              element: <Nizomlar />,
            },
          ],
        },
        {
          path: "viloyatlar",
          element: <HududlarLayout />,
          children: [
            {
              index: true,
              element: <Viloyatlar />,
            },
            {
              path: "tumanlar/:tumanId",
              element: <Tumanlar/>,
            },
            {
              path: "tumanlar/:tumanId/muassasalar/:muassasaId",
              element: <Muassasalar />,
            },
            {
              path: "tumanlar/:tumanId/muassasalar/:muassasaId/collages/:collageId",
              element: <MuassasaMalumotiLayout />,
              children: [
                {
                  index: true,
                  element: <UmumiyMalumotlar/>
                },
                {
                  path: "ustav",
                  element: <MuassasaUstav/>
                },
                {
                  path: "vasiylik-kengashi",
                  element: <VasiylikKengash/>
                },
                {
                  path: "pedogoglar-tarkibi",
                  element: <PedagogTarkib/>
                },
                {
                  path: "rivojlanish-strategiyasi",
                  element: <Rivojlanish/>
                },
                {
                  path: "worldSkills",
                  element: <WorldSkills/>
                },
                {
                  path: "worldSkills/:worldSkillId",
                  element: <WorldSkillsDetail/>
                },
                {
                  path: "qisqa-muddatli-kurslar",
                  element: <QisqaKurs/>
                },
                {
                  path: "qisqa-muddatli-kurslar/:qisqaKursId",
                  element: <QisqaKursDetail/>
                },
                {
                  path: "tayyorlanadigan-kasblar",
                  element: <TayyorlanadiganKasb/>
                }
              ]
            },
          ],
        },
        {
          path: "Talim-Standartlari-Fanlar",
          element: <LayoutTalimStandart />,
          children: [
            {
              index: true,
              element: <TalimStandartSahifa />,
            },
            {
              path: "detail",
              element: <TalimStandartDetail />,
            },
            {
              path: "umum-kasbiy",
              element: <UmumiyKasbiy />,
            },
            {
              path: "umum-kasbiy-detail",
              element: <UmumKasbiyDetail />,
            },
            {
              path: "fan-oqtivchisi",
              element: <FanOqituvchi />,
            },
            {
              path: "oquv-material",
              element: <OquvMateriallarToplami />,
            },
            {
              path: "oquv-amaliyot",
              element: <OquvAmaliyot />,
            },
          ],
        },

        {
          path: "Adabiyotlar",
          element: <AdabiyotlarAll />,
          children: [
            {
              index: true,
              element: <MainAdabiyot />,
            },
            {
              path: ":id",
              element: <BookBatafsil />,
            },
          ],
        },
        {
          path: "Yangiliklar",
          element: <YangilikLayout />,
          children: [
            {
              index: true,
              element: <Yangiliklar />,
            },
            {
              path: "yangilik-detail",
              element: <YangiliklarDetail />,
            },
          ],
        },
        {
          path: "Contact",
          element: <Contact />,
        },
        {
          path: "Profil",
          element: <Profil />,
        },
        {
          path: "register-select",
          element: <RegisterSelect/>
        },
        {
          path: "register-teacher",
          element: <RegisterTeacher />,
        },
        {
          path:"register-student",
          element: <RegisterStudent/>
        },
        {
          path: "regPortfolio",
          element: <RegPortfolio />,
        },
        {
          path: "regTeacherFiles",
          element: <RegTeacherFiles />,
        },
        {
          path: "regParolTiklash",
          element: <RegParolTiklash />,
        },
        {
          path: "regKod",
          element: <RegKod />,
        },
        {
          path: "regNewParol",
          element: <RegNewParol />,
        },
        {
          path: "DropDawnProfile",
          element: <DropDawnProfile />,
        },
        {
          path: "*",
          element: <Oops />,
        },
      ],
    },
    {
      path: "/login",
      element: auth.refreshToken ? <Navigate to="/"/> : <Loginn />,
    },
    {
      path: "/register-select",
      element:<RegisterSelect/>
    },
    {
      path: "/register-teacher",
      element:<RegisterTeacher />,
    },
    {
      path:"/register-student",
      element:<RegisterStudent/>
    },
  ],
);

  return (
    <RouterProvider router={routes} />

    // {/* <FanOqituvchi /> */}
    //   {/* <OquvAmaliyot /> */}
    //   {/* <OquvMateriallarToplami /> */}
    //   {/* <UmumiyKasbiy /> */}
    //   {/* <UmumKasbiyDetail /> */}
    // </>
  );
}

export default App;
