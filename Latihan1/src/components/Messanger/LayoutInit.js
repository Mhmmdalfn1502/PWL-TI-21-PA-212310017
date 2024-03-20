import Header from "./Header";
import Footer from "./Footer";
import ChapterOne from "./ChapterOne";


const LayoutInit = ({ children }) => {
  return (
    <div className="">
      <div className="">
        <div className="">
          
          <Header />

          <section className="py-5">
            <div className="">
              {children}
            </div>
          </section>

          <Footer />

        </div>
      </div>
    </div>
  );
};

export default LayoutInit;
