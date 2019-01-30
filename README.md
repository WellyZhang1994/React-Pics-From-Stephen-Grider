This project is implemented sample code from React Tutorial by Stephen-Grider in Udemy
[https://www.udemy.com/react-redux/learn/v4/content]

### Component
  - App.js
  - SearchBar.js
  - ImageList.js
  - ImageCard.js
  

#### App.js

unsplash api : get picture -> [https://unsplash.com/]

- SearchBar.js
- ImageList.js

#####  Using unsplash api to fetch pictures

```sh
onSearchSubmit = async (term) =>{
    const response = await unsplash.get('/search/photos',{
        params:{ query: term} 
    });
    this.setState({ images: response.data.results});
}
```

#### ImageList.js

Build each imagecard in imagelists

```sh
const ImageList = (props) => {
    const images = props.images.map((image) => {
        return (
           <ImageCard key={image.id} image={image} />
        )
    });
    return <div className="image-list"> {images} </div>;
};
```

