import "./ImageContent.scss";

const ImageContent = () => {
  return (
    <div className="content">
      <div className="content__container">
        <div className="content__container__image">
          <div className="content__container__image__container">
            <div className="content__container__image__container__title">
              <h2>Pro tips and searching hacks</h2>
            </div>
            <div className="content__container__image__container__subtitle">
              <p>
                Check out our expert guides to searching smarter and get the
                most from your Whoovr.
              </p>
            </div>
            <div className="content__container__image__container__button">
                <button>
                    <a href="https://www.whoovr.com/searching-tips">
                        <span>
                            <i className="fas fa-arrow-right"></i>
                        </span>
                        <span>
                            Find out how
                        </span>
                    </a>
                </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContent;
