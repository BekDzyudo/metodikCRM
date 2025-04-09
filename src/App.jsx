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
import { RegPortfolio } from "./pages/regPortfolio/regPortfolio";
import { RegTeacherFiles } from "./pages/regTeacherFiles/regTeacherFiles";
import { Login } from "./pages/Auth/login/Login";
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
import DropDawnProfile from "./components/navbar/topNavbar/DropDawnProfile";
import MainLayouts from "./layouts/MainLayouts";
import { HududlarLayout, Viloyatlar, Tumanlar, Muassasalar, MuassasaMalumotiLayout } from "./pages/ProfessionalTalimMuassasalari";
import {UmumiyMalumotlar, MuassasaUstav, VasiylikKengash, PedagogTarkib, Rivojlanish, WorldSkills, WorldSkillsDetail, QisqaKurs, QisqaKursDetail, TayyorlanadiganKasb} from "./pages/ProfessionalTalimMuassasalari/collageDetails";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
// import { RegisterSelect, RegisterTeacher, RegisterStudent } from "./pages/Auth/register";
import { RegisterSelect } from "./pages/Auth/register/RegisterSelect";
import { RegisterTeacher } from "./pages/Auth/register/RegisterTeacher";
import { RegisterStudent } from "./pages/Auth/register/RegisterStudent";
import { RegParolTiklash } from "./pages/Auth/register/regParolTiklash";
import { RegNewParol } from "./pages/Auth/register/regNewParol";
import RTRLayout from "./pages/rtr/RTRLayout";
import RTRHome from "./pages/rtr/RTRHome";
import BoshlangichTalim from "./pages/rtr/daraja1/BoshlangichTalim";
import OrtaTalim from "./pages/rtr/daraja2/OrtaTalim";
import MaxsusTalim from "./pages/rtr/daraja3/MaxsusTalim";
import BoshlangichTalimDetail from "./pages/rtr/daraja1/BoshlangichTalimDetail";
import OrtaTalimDetail from "./pages/rtr/daraja2/OrtaTalimDetail";
import MaxsusTalimDetail from "./pages/rtr/daraja3/MaxsusTalimDetail"
import Rating from "./pages/teacherRating/TeacherRating"
import {ApprovedDocument, Documents, ApprovedDokumentDetail, IncomingDocuments, DocumentDetail, LayoutDocument, ReturnedDocument, ReturnedDocumentDetail} from "./pages/documents/index"
import TayyorlanadiganKasbDetails from "./pages/ProfessionalTalimMuassasalari/collageDetails/TayyorlanadiganKasbDetails";
import useGetFetchProfil from "./hooks/useGetFetchProfil"
import ChatModal from "./pages/profil/components/modal/chat/ChatModal";
import Materiallar from "./pages/materiallar/Materiallar";
import MaterialDetail from "./pages/materiallar/MaterialDetail";

function App() {
  const {auth, userData} = useContext(AuthContext)


  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute auth = {auth}>
          <MainLayouts />
        // </ProtectedRoute>
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
                },
                {
                  path: "tayyorlanadigan-kasblar/:kasbId",
                  element: <TayyorlanadiganKasbDetails/>
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
          path: "raqamli-talim-resurslari",
          element: <RTRLayout/>,
          children: [
            {
              index: true,
              element: <RTRHome/>
            },
            {
              path: "boshlangich-professional-talim",
              element: <BoshlangichTalim/>,
            },
            {
              path: "boshlangich-professional-talim/:id",
              element: <BoshlangichTalimDetail/>
            },
            {
              path: "orta-professional-talim",
              element: <OrtaTalim/>
            },
            {
              path: "orta-professional-talim/:id",
              element: <OrtaTalimDetail/>
            },
            {
              path: "orta-maxsus-professional-talim",
              element: <MaxsusTalim/>
            },
            {
              path: "orta-maxsus-professional-talim/:id",
              element: <MaxsusTalimDetail/>
            }
          ]
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
          path: "rating",
          element: <Rating/>
        },
        {
          path: "Document",
          element: userData?.user_roles == "metodist" ? <LayoutDocument /> : <Navigate to="*"/>,
          children: [
            {
              path: "documents",
              element: <Documents />
            },
            {
              path: "IncomingDocuments",
              element: <IncomingDocuments />
            },
            {
              path: "DocumentDetail/:id",
              element: <DocumentDetail />
            },
            {
              path: "ReturnedDocument",
              element: <ReturnedDocument />
            },
            // {
            //   path: "ReturnedDocumentDetail",
            //   element: <ReturnedDocumentDetail />
            // },
            {
              path: "ApprovedDocument",
              element: <ApprovedDocument />
            },
            // {
            //   path: "ApprovedDocumentDetail",
            //   element: <ApprovedDokumentDetail />
            // }
    
          ]
        },
        {
          path: "materiallar",
          element: <Materiallar/>
        },
        {
          path: "materiallarDetail/:id",
          element: <MaterialDetail/>
        },
        // {
        //   path: "Contact",
        //   element: <Contact />,
        // },
        {
          path: "profil",
          element: userData?.user_roles == "teacher" ? <Profil /> : <Navigate to="*"/>,
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
          path: "regKod",
          element: <RegKod />,
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
      element: auth.refreshToken ? <Navigate to="/"/> : <Login />,
    },
    {
      path: "/register-select",
      element: auth.refreshToken ? <Navigate to="/"/> : <RegisterSelect/>
    },
    {
      path: "/register-teacher",
      element: auth.refreshToken ? <Navigate to="/"/> : <RegisterTeacher />,
    },
    {
      path:"/register-student",
      element: auth.refreshToken ? <Navigate to="/"/> : <RegisterStudent/>
    },
    {
      path: "/regParolTiklash",
      element: auth.refreshToken ? <Navigate to="/"/> : <RegParolTiklash />,
    },
    {
      path: "/regNewParol",
      element: auth.refreshToken ? <Navigate to="/"/> : <RegNewParol />,
    },
  ],
);

  return (
    <RouterProvider router={routes} />
  );

}

export default App;
