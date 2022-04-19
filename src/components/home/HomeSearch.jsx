import "./HomeSearch.scss";

const HomeSearch = () => {

  const changeImage = () => {
    const image = document.querySelector(".home-search__image");
    
    console.log('yo')

    // change background image of image
    const randomNumber = Math.floor(Math.random() * 3)+1;
    image.style.backgroundImage = `url(http://localhost:3000/carousel/${randomNumber}.jpg)`;
  }

  return (
    <>
      <div className="home-search">
        <div onClick={()=>{
          changeImage()
        }}
        className="home-search__image">
          <div className="home-search__image__container">
            <div className="home-search__image__container--title">
              <h2>Let's Discover</h2>
            </div>
            <div className="home-search__image__container--box">
              <div className="search-form">
                <div className="search-form__input">
                  <input type="text" placeholder="Keyword(s)" />
                  <input type="text" placeholder="Location" />
                  <input type="text" placeholder="Radius" />
                </div>
                <div className="search-form__bottom">
                  <div className="search-form__bottom--column">
                    <div className="search-form__bottom__checkboxes">
                      <div className="search-form__bottom__checkboxes__checkbox">
                        <input type="checkbox" />
                        <label>Company</label>
                      </div>
                      <div className="search-form__bottom__checkboxes__checkbox">
                        <input type="checkbox" />
                        <label>Entertainment</label>
                      </div>
                    </div>
                    <div className="search-form__bottom__checkboxes">
                      <div className="search-form__bottom__checkboxes__checkbox">
                        <input type="checkbox" />
                        <label>Registry</label>
                      </div>
                      <div className="search-form__bottom__checkboxes__checkbox">
                        <input type="checkbox" />
                        <label>Government</label>
                      </div>
                    </div>
                  </div>
                  <div className="search-form__bottom__submit">
                    <input type="submit" value="Search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSearch;
