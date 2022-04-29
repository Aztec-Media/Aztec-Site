import HomePortfolioItemImg from './HomePortfolioItemImg';
import HomePortfolioItemText from './HomePortfolioItemText';

export default function HomePortfolioItem({ item, id }) {
  return (
    <>
      <HomePortfolioItemImg image={item.attributes.mainImage.data.attributes} />
      <HomePortfolioItemText item={item} />
    </>
  );
}
