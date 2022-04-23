import { Carousel } from "react-carousel-minimal";
import './Slider.css';
function Slider({ photos, category }) {
  let images = [];
  if (photos) {
    images = photos.map((el) => ({ image: `/img/items/${category}/${el}` }));
  }

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px", margin: '4rem 0'
          }}
        >
          <Carousel
            data={images}
            time={3000}
            width="850px"
            height="500px"
            margin='4rem 0'
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="white"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "4rem auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
