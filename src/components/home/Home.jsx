import React from "react";
import { Container} from "react-bootstrap";
import fram1 from "../../images/Frame (1).png";
import fram2 from "../../images/Frame (2).png";
import fram3 from "../../images/Frame (3).png";
import imgHeader from "../../images/Frame.png";
import fram4 from "../../images/Frame (4).png";
import fram5 from "../../images/Frame (5).png";
import fram6 from "../../images/Frame (6).png";
import fram7 from "../../images/BOX4.png";
import imgGroup1 from "../../images/group43.png";
import imgGroup2 from "../../images/Group 44.png";
import imgGroup3 from "../../images/Group 45.png";
import imgGroup4 from "../../images/PHP_1_.png";
import "./Home.css";
const Home = () => {
  const pro = [
    {
      img: fram1,
      heading: "تعلّم أحدث التقنيات",
      paragraph: "تقدم محتوى متجدد وفقًا لأحدث التقنيات المطلوبة في سوق العمل",
    },
    {
      img: fram2,
      heading: " محتوى تعليمي متنوع ",
      paragraph: "تقدم محتوى متنوع ومتكامل يخدم مختلف الفئات والمجالات.",
    },
    {
      img: fram3,
      heading: "تعلّم سهل وممتع",
      paragraph: "تقدم محتوى تعليمي بشكل بسيط وممتع وبجودة عالية.",
    },
  ];
  return (
    <section className="home">
      <div className="header">
        {/* header */}
        <Container className="content">
          <div className=" content_row d-flex align-items-center  justify-content-between ">
            <div lg="6">
              <div className="image">
                <img src={imgHeader} alt="imgHeader" />
              </div>
            </div>
            <div lg="6">
              <div className="text">
                <h1>تعلم البرمجة وابدأ بصناعة حلول لمشاكل العالم</h1>
                <p>
                  توفر لك منصة سطر التعليمية محتوى متنوع ومتكامل يساعدك في تعلم
                  البرمجة بكل سهولة ومتعة
                </p>
                <button className="btnLg">سجل وابدأ التعلم الآن</button>
              </div>
            </div>
          </div>
        </Container>
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,64L21.8,85.3C43.6,107,87,149,131,144C174.5,139,218,85,262,74.7C305.5,64,349,96,393,96C436.4,96,480,64,524,53.3C567.3,43,611,53,655,80C698.2,107,742,149,785,160C829.1,171,873,149,916,149.3C960,149,1004,171,1047,192C1090.9,213,1135,235,1178,250.7C1221.8,267,1265,277,1309,245.3C1352.7,213,1396,139,1418,101.3L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/* start adv */}
      <div className="adv">
        <Container className="m-auto text-center">
          <div className="text-adv">
            <span>اهم المميزات</span>
            <h2>محتوى تعليمي مجاني وبجودة عالية</h2>
            <p>
              نفخر بتقديم محتوى عربي تقني عالي الجودة وغير مدفوع بروح
              سعودية،يمكن من خلاله تعلم البرمجة في أهم المجالات التقنية
            </p>
          </div>
          <div className="products ">
            {pro.map((item, index) => (
              <div className="card" lg="4" key={index}>
                <div className="image">
                  <img src={item.img} alt="pro1" />
                </div>
                <h3>{item.heading}</h3>
                <p>{item.paragraph}</p>
              </div>
            ))}
          </div>
        </Container>
        {/* start learning-content */}
        <Container className="m-auto">
          <div className=" learning-content mb-5 d-flex justify-content-between align-items-center">
            <div>
              <button className="btnLg">الانتقال الى المحتوى التعليمي</button>
            </div>
            <div>
              <h2>يمكنك البدء بتصفح كامل المحتوى التعليمي</h2>
            </div>
          </div>
          <div className="learning-boxes d-flex justify-content-between align-items-center">
            <div className="box">
              <img src={fram4} alt="box1" />
              <h3>تحديات 4</h3>
            </div>
            <div className="box">
              <img src={fram5} alt="box1" />
              <h3>50 سؤال اختبار</h3>
            </div>
            <div className="box">
              <img src={fram6} alt="box1" />
              <h3>5 مشاريع</h3>
            </div>
            <div className="box">
              <img src={fram7} alt="box1" />
              <h3>0 فيديو</h3>
            </div>
          </div>
          {/* start content-type */}
        </Container>
        <Container className="container_type mt-5 mb-5">
          <div className="content-type w-100 text-center">
            <span>أنواع المحتوى التعليمي</span>

            <div className="flex-type d-flex justify-content-around align-items-center">
              <div className="text-type">
                <h3>المسارات</h3>
                <p>
                  توضح لك معالم الطريق الذي تحتاجه لتصل لهدف معين من خلال مجموعة
                  من الدورات والمشاريع التطبيقية المقترحة التي تشكل حزمة تعليمية
                  متكاملة.
                </p>
                <button className="btnLg">الانتقال الى المحتوى التعليمي</button>
              </div>
              <div className="image-type">
                <img src={imgGroup1} alt="content_img" />
              </div>
            </div>

            <div className="flex-type d-flex justify-content-around align-items-center flex-row-reverse">
              <div className="text-type">
                <h3>الدورات</h3>
                <p>
                  مجموعة من الدروس التعليمية والمشاريع التطبيقية بهدف إتقان
                  المهارات والتقنيات الحديثة.
                </p>
                <button className="btnLg">الانتقال الى المحتوى التعليمي</button>
              </div>
              <div className="image-type">
                <img src={imgGroup2} alt="content_img" />
              </div>
            </div>

            <div className="flex-type d-flex justify-content-around align-items-center">
              <div className="text-type">
                <h3>المشاريع التطبيقية</h3>
                <p>
                  دروس مصغّرة توضح لك كيفية إتقان مهارة برمجية محددة تحتاجها
                  لبناء مشروعك.
                </p>
                <button className="btnLg">الانتقال الى المحتوى التعليمي</button>
              </div>
              <div className="image-type">
                <img src={imgGroup3} alt="content_img" />
              </div>
            </div>

            <div className="flex-type d-flex justify-content-around align-items-center flex-row-reverse">
              <div className="text-type">
                <h3>التحديات</h3>
                <p>
                  تحديات تعزز المهارات التقنية والتحفيز التنافس الثقافي وتنمية
                  القدرة المعرفية
                </p>
                <button className="btnLg">الانتقال الى المحتوى التعليمي</button>
              </div>
              <div className="image-type">
                <img src={imgGroup4} alt="content_img" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Home;
