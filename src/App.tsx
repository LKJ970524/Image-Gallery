import { useCallback, useState } from "react";
import "./App.css";
import ImageBox from "./components/ImageBox";
import {useDropzone} from "react-dropzone"

function App() {
  const [imageList, setImageList] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: string | any[]) => {
    console.log(acceptedFiles);
    
    if (acceptedFiles.length) {
      for (const file of acceptedFiles) {
        const reader = new FileReader()

        reader.readAsDataURL(file)
        reader.onloadend = (event) => {
          setImageList((prev) => [...prev, event.target?.result as string])
        }
      }
    }
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const handleDeleteImage = (targetUrl: string) => {
    setImageList((prev) => prev.filter((url) => url !== targetUrl));
  };

  return (
    <div className="container">
      <div className={"gallery-box " + (imageList.length > 0 && "row")}>
        {
          imageList.length === 0 &&
          <div className="text-center">
            이미지가 없습니다. <br />
            이미지를 추가해주세요
          </div>
        }
        {
          imageList.map((el, idx) => 
            <ImageBox 
              key={el + idx} 
              src={el} 
              onDelete={handleDeleteImage} 
            />
          )
        }
        <div className="plus-box"
          {...getRootProps()}
        >
        <input
          {...getInputProps()}
          />
          +
        </div>
        {
          imageList.length === 0 &&
          <div className="text-center">
            자신이 좋아하는 사진을 넣어서 예쁘게 꾸며보세요~
          </div>
        }
      </div>
    </div>
  );
}

export default App;
