export interface Data {
  title: string;
  imgSrc: string;
  text: string;
}
const num = Math.floor(Math.random() * 10);

const data: Data[] = [
  {
    title: "first card",
    imgSrc: `https://loremflickr.com/320/240?lock=${num}`,
    text: "first card's text",
  },
  {
    title: "second's card",
    imgSrc: `https://loremflickr.com/320/240?lock=${num + 1}`,
    text: "second's card's text",
  },
  {
    title: "third's card",
    imgSrc: `https://loremflickr.com/320/240?lock=${num - 1}`,
    text: "third's card's text",
  },
];
export default data;
