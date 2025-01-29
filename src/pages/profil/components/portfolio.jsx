import React, {useContext} from "react";
import editIcon from "../../../images/editIcon.svg";
import ilmiyDaraja from "../../../images/ilmiyDaraja.svg";
import ilmiyUnvon from "../../../images/ilmiyUnvon.svg";
import yaratganPraktiklar from "../../../images/yaratganPraktiklar.svg";
import worldSkills from "../../../images/worldSkills.svg";
import staj from "../../../images/staj.svg";
import oquvMeyoriyQatnashish from "../../../images/oquvMeyoriyQatnashish.svg";
import musobaqaGolibi from "../../../images/musobaqaGolibi.svg";
import korgazmaMateriallari from "../../../images/korgazmaMateriallari.svg";
import chopEttirganQollanmasi from "../../../images/chopEttirganQollanmasi.svg";
import chiqarganMaqolalari from "../../../images/chiqarganMaqolalari.svg";
import uslubiyQollanmalari from "../../../images/uslubiyQollanmalari.svg";
import davlatMukofotlari from "../../../images/davlatMukofotlari.svg";
import multimediaMateriallari from "../../../images/multimediaMateriallari.svg";
import { PortfolioContext } from "./contexts/editPortfolioContext";
import PageLoader from "../../../Loader/PageLoader";
import useGetFetchProfil from "../../../hooks/useGetFetchProfil";
import { TeacherFiles } from "./teacherFiles";

export function Portfolio() {

  const { setEditObj, setBlok} =
    useContext(PortfolioContext);

  // ====================================================

  const { data, isPending, error } = useGetFetchProfil(
    `${import.meta.env.VITE_BASE_URL}/profil/`
  );

  const { data: user } = useGetFetchProfil(
    `${import.meta.env.VITE_BASE_URL}/user-data/`
  );
  

  return (
    <div className="allPortfolio">
      <div className="portfolio">
          {isPending && <PageLoader />}
          {/* {error && <div className="noData">{error}</div>} */}
          {data && (
            <>
              <div className="portfolioList">
                <div className="portfolioItem">
                  <div className="portfolioTitle">
                    <h4>REYTING: 26</h4>
                    <img
                      src={editIcon}
                      id="editIconPortfolioBtn"
                      alt=""
                      onClick={() => {
                        setBlok(true);
                        setEditObj(data);
                      }}
                    />
                  </div>

                  <div className="portfolioDesc">
                    {user && (
                      <div className="teacherBlok">
                        <div className="teacherImg">
                          <img src={user.image} alt="img" />
                        </div>
                        <div>
                          <div className="teachername">
                            <h4>{user.last_name + " " + user.first_name}</h4>
                            <p>
                              {user.region?.name +
                                " viloyati, " +
                                user.district?.name +
                                " tumani, " +
                                user.college?.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="portfolioLeft">
                      <div className="portfolioChild">
                        <div className="portfolioIcon">
                          <img src={ilmiyDaraja} alt="" />
                        </div>
                        <div className="portfolioItemDesc">
                          <h4>Ilmiy daraja:</h4>
                          <p>{data.ilmiy_daraja}</p>
                        </div>
                      </div>
                      <div className="portfolioChild">
                        <div className="portfolioIcon">
                          <img src={ilmiyUnvon} alt="" />
                        </div>
                        <div className="portfolioItemDesc">
                          <h4>Ilmiy unvon:</h4>
                          <p>{data.ilmiy_unvon}</p>
                        </div>
                      </div>
                      <div className="portfolioChild">
                        <div className="portfolioIcon">
                          <img src={yaratganPraktiklar} alt="" />
                        </div>
                        <div className="portfolioItemDesc">
                          <h4>Yaratgan praktiklar:</h4>
                          <p>{data.yaratgan_praktik}</p>
                        </div>
                      </div>
                      <div className="portfolioChild">
                        <div className="portfolioIcon">
                          <img src={worldSkills} alt="" />
                        </div>
                        <div className="portfolioItemDesc">
                          <h4>Worldskills mutaxassis:</h4>
                          <p>
                            {data.world_skills_mutaxasis
                              ? "Mutaxassis"
                              : "Mutaxassis emas"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolioRight">
                      <div className="portfolioChild">
                        <div className="portfolioIcon">
                          <img src={staj} alt="" />
                        </div>
                        <div className="portfolioItemDesc">
                          <h4>Ta'lim sohasidagi umumiy ish staji:</h4>
                          <p>{data.ish_staji}</p>
                        </div>
                      </div>
                      <div className="portfolioChild">
                        <div className="portfolioIcon">
                          <img src={oquvMeyoriyQatnashish} alt="" />
                        </div>
                        <div className="portfolioItemDesc">
                          <h4>O'quv-me'yoriy ishlashda qatnashganligi:</h4>
                          <p>
                            {data.uquv_meyoriy_ishlarda_qatnashganligi
                              ? "Qatnashgan"
                              : "Qatnashmagan"}
                          </p>
                        </div>
                      </div>
                      <div className="portfolioChild">
                        <div className="portfolioIcon">
                          <img src={musobaqaGolibi} alt="" />
                        </div>
                        <div className="portfolioItemDesc">
                          <h4>Musobaqa g'olibi:</h4>
                          <p>{data.musobaqalar}</p>
                        </div>
                      </div>
                      <div className="portfolioChild">
                        <div className="portfolioIcon">
                          <img src={musobaqaGolibi} alt="" />
                        </div>
                        <div className="portfolioItemDesc">
                          <h4>Til bilish sertifikati:</h4>
                          <p>{data.til_sertifikatlari}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="achievements">
                <div className="achievementsItemOne">
                  <img src={korgazmaMateriallari} alt="" />
                  <p>Ko'rgazma materiallari:</p>
                  <span>{data.korgazma_materiallari}</span>
                </div>
                <div className="achievementsItem">
                  <div className="imgCircle">
                    <img src={chopEttirganQollanmasi} alt="" />
                  </div>
                  <p>Chop ettirgan o'quv qo'llanmalari:</p>
                  <span>{data.uquv_qollanmalar}</span>
                </div>
                <div className="achievementsItem">
                  <div className="imgCircle">
                    <img src={chiqarganMaqolalari} alt="" />
                  </div>
                  <p>Chiqargan maqolalari:</p>
                  <span>{data.maqolalar}</span>
                </div>
                <div className="achievementsItem">
                  <div className="imgCircle">
                    <img src={uslubiyQollanmalari} alt="" />
                  </div>
                  <p>Uslubiy qo'llanmalar:</p>
                  <span>{data.uslubiy_qollanmalar}</span>
                </div>
                <div className="achievementsItem">
                  <div className="imgCircle">
                    <img src={davlatMukofotlari} alt="" />
                  </div>
                  <p>Davlat mukofotlari:</p>
                  <span>{data.davlat_mukofotlari}</span>
                </div>
                <div className="achievementsItem">
                  <div className="imgCircle">
                    <img src={multimediaMateriallari} alt="" />
                  </div>
                  <p>Multimedia materiallari:</p>
                  <span>{data.multimedialar}</span>
                </div>
              </div>
            </>
          )}
      </div>
      <TeacherFiles/>
    </div>
  );
}
