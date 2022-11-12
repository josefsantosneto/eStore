import { useNavigate } from 'react-router-dom';
import { BackgroundImage, Body, DirecotryItemContainer  } from '../directory-item/directory-item.styles';

const DirectoryItem = ({category})=>{
    const {imageUrl, title, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = ()=> navigate(route);
    return(
        <DirecotryItemContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl}/>
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </DirecotryItemContainer>
    );
}

export default DirectoryItem;