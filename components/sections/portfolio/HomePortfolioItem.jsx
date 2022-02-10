import HomePortfolioItemImg from './HomePortfolioItemImg';
import HomePortfolioItemText from './HomePortfolioItemText';

export default function HomePortfolioItem({ item, id }) {
  return (
    <>
      <HomePortfolioItemImg image={item.MainImage.data.attributes} />
      <HomePortfolioItemText item={item} id={id} />
    </>
  );
}
