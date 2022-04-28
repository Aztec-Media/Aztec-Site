import HomePortfolioItemImg from './HomePortfolioItemImg';
import HomePortfolioItemText from './HomePortfolioItemText';

export default function HomePortfolioItem({ item, id }) {
  console.log(item.attributes.mainImage.data.attributes.url);
  return (
    <>
      <HomePortfolioItemImg
        image={item.attributes.mainImage.data.attributes.url}
      />
      <HomePortfolioItemText item={item} />
    </>
  );
}
