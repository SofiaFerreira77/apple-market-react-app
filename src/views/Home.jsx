import Banner from "../components/Banner";
import List from "../components/ProductList";

const Home = props => {
  return (
    <main className="Home">
        <Banner title="Apple at Work" subtitle="Get the power to take your business to the next level." 
                link="https://www.apple.com/business/"
                linkName='Learn about Apple at Work'/>
        <List />
    </main>
  )
}

export default Home