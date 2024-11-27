import PriceOption from "../PriceOption/PriceOption";


const PriceOptions1 = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 20,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 40,
          "features": [
            "Access to gym equipment",
            "Locker room and shower access",
            "Free Wi-Fi",
            "1 group class per week"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 60,
          "features": [
            "Access to gym equipment",
            "Locker room and shower access",
            "Free Wi-Fi",
            "Unlimited group classes",
            "1 personal training session per month"
          ]
        },
        {
          "id": 4,
          "name": "Couple's Plan",
          "price": 75,
          "features": [
            "Access to gym equipment for 2 people",
            "Locker room and shower access",
            "Free Wi-Fi",
            "1 group class per person per week"
          ]
        },
        {
          "id": 5,
          "name": "Family Plan",
          "price": 100,
          "features": [
            "Access to gym equipment for up to 4 people",
            "Locker room and shower access",
            "Free Wi-Fi",
            "2 group classes per week",
            "Access to kids' area"
          ]
        },
        {
          "id": 6,
          "name": "VIP Plan",
          "price": 150,
          "features": [
            "24/7 gym access",
            "Personal locker",
            "Unlimited group classes",
            "4 personal training sessions per month",
            "Spa and sauna access",
            "Nutrition consultation"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
                priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions1;