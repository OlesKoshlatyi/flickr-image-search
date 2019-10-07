import React from "react";
import InputForm from "./InputForm";
import ImagesGrid from "./ImagesGrid";
import "./../css/styles.css";

class App extends React.Component {
  state = {
    fetchedData: []
  };

  getPhotos = e => {
    e.preventDefault();
    let title = e.target.elements.title.value;
    if (title) {
      fetch(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6b3575d10435de5f010fc941f5eff94a&text=${title}&per_page=500&format=json&nojsoncallback=1`
      )
        .then(response => response.json())
        .then(json => {
          let fetchedPhotos = json.photos.photo.map((i, index) => {
            let wholeTitle = i.title;
            let imgUrl = `https://farm${i.farm}.staticflickr.com/${i.server}/${i.id}_${i.secret}.jpg`;
            if (json.photos.photo[index].title.toLowerCase().includes(title)) {
              return { photos: imgUrl, title: wholeTitle, id: i.id };
            }
            return "";
          });
          this.setState({
            fetchedData: fetchedPhotos.filter(url => url !== "")
          });
        })
        .catch(err => console.log("Error: ", err));
    }
  };

  render() {
    return (
      <div>
        <InputForm getPhotos={this.getPhotos} />
        <ImagesGrid fetchedData={this.state.fetchedData} />
      </div>
    );
  }
}

export default App;
