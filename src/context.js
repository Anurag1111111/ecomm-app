import React, { Component } from "react";

const CountContext = React.createContext();

export class Provider extends Component {
  state = {
    Projects: [
      {
        id: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        title: "Ellegent Watches",
        information: "Watches that enhances personality",
        price: "Starting from $100.00",
      },
      {
        id: 2,
        imageUrl:
          "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_776%2Cy_755/MTk0Njk2MDgyNjkxNzI4NTQ2/ja-morant-shoe.jpg",
        title: "Sports Shoes",
        information: "Everyday shoes you need.",
        price: "Starting from $50.00",
      },
      {
        id: 3,
        imageUrl:
          "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/6832333/2018/9/14/f0e3a9a6-b1d3-426e-9f5c-0350699140c41536926290358-WROGN-Men-Blue-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jean-1.jpg",
        title: "Trendy Apparel",
        information: "Summer collection is here.",
        price: "Starting from $25.00",
      },
    ],
    Featureds: [
      {
        id: 1,
        imageUrl:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU93_VW_34FR+watch-41-alum-starlight-nc-8s_VW_34FR_WF_CO_GEO_IN?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171039000%2C1661978672671",
        imageUrl1:
          "https://c4.wallpaperflare.com/wallpaper/766/696/980/5c1cf169cd1e9-wallpaper-preview.jpg",
        title: "Apple Watch",
        information: "A smartphonelike device worn on the wrist.",
        paragraph:
          "The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer, with an innovative pin-and-tuck closure.",
        price: "$300.00",
        strikedprice: "$350.00",
        starsTotal: 5,
        stock: "In Stock",
        starsActive: 4,
        rev: "50",
      },
      {
        id: 2,
        imageUrl:
          "https://www.mensjournal.com/.image/t_share/MTk2MTM2NzExMDkyNzA4ODY5/17-timex-expedition-north-field-post-solar-41mm.jpg",
        imageUrl1:
          "https://s3.envato.com/files/263224385/50%20-%2005.02.2018.jpg",
        title: "Timex Watch",
        information: "A portable timepiece worn by a person.",
        paragraph:
          "Stay on time and on trend! Our fashion collection is perfect for a city that celebrates around-the-clock glamour. Show off your personality with these stylish watches that give you the perfect look all day long.",
        price: "$105.00",
        starsTotal: 5,
        starsActive: 3,
        stock: "Out of Stock",
        rev: "100",
      },
      {
        id: 3,
        imageUrl:
          "https://media.istockphoto.com/id/1193931855/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-white.jpg?s=612x612&w=0&k=20&c=vw1ceQ7rq04cCkOvzqaywVwP34fLs0QvdI0pp8-elkM=",
        imageUrl1:
          "https://media.istockphoto.com/id/1180244659/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-black.jpg?s=170667a&w=0&k=20&c=a22NfvvGVzCjb0ACwfAQe3mM8SXg1m349kBKYshLOGE=",
        title: "Fossil Watch",
        information: "Watch that enhances personality",
        price: "$100.00",
        strikedprice: "$150.00",
        paragraph:
          "Stainless steel watch bracelets are extremely durable and can last the lifetime of a watch if properly maintained. We offer free watch adjustments in our Fossil Retail and Outlet Stores.",
        starsTotal: 5,
        stock: "In Stock",
        starsActive: 4,
        rev: "70",
      },
      {
        id: 4,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0590/8850/2939/products/68.1_2a428933-6b44-4538-96d0-f85ef87cb74b.jpg?v=1661368290",
        imageUrl1:
          "https://c4.wallpaperflare.com/wallpaper/352/913/115/clock-rolex-time-watch-wallpaper-thumb.jpg",
        title: "Seiko Watch",
        information: "Watch added with elegent look.",
        price: "$300.00",
        starsTotal: 5,
        paragraph:
          "Buy Seiko Sports Round Automatic Green Dial Men Watch - SRPD63K1| Helios Watch Store",
        stock: "In Stock",
        starsActive: 5,
        rev: "150",
      },
    ],
    Shoes: [
      {
        id: 5,
        imageUrl:
          "https://assets.adidas.com/images/w_600,f_auto,q_auto/078d9a99950849b5be84af0a008fdeb8_9366/VALRUN_SHOES_Black_GB2346_01_standard.jpg",
        imageUrl1:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ddfb91ab03b94727b3e6adcd00848e2a_9366/ADI_RUDH_SHOES_Black_EY2980_01_standard.jpg",
        title: "Adidas Shoe",
        information: "Nice comfort every day life.",
        price: "$150.00",
        strikedprice: "$200.00",
        stock: "In Stock",
        starsTotal: 5,
        paragraph:
          "The adidas range of men's shoes has got you covered, if you're striving to be the best or you just want the best fit for your daily life. With iconic designs and high-performance technologies, you can be sure that your shoes won't let you down.",
        rev: "40",
        value3: "8 9 10 11",
        starsActive: 3,
      },
      {
        id: 6,
        imageUrl:
          "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/350da6ea-c22d-420b-8f0f-6f13bced759a/pegasus-39-road-running-shoes-kmZSD6.png",
        imageUrl1:
          "https://static.nike.com/a/images/t_default/0de73c76-fbb0-487f-9ec2-103bf0629dfa/pegasus-39-road-running-shoes-H2wpv0.png",
        title: "Nike Shoe",
        information: "Running shoes with light material.",
        price: "$200.00",
        starsTotal: 5,
        stock: "In Stock",
        rev: "60",
        paragraph:
          "Providing sustainable innovations and solutions to athlete everywhere, Nike brings to you the best of sports shoes for men and women alike.",
        value3: "8 9 10 11",
        strikedprice: "$220.00",
        starsActive: 4,
      },
      {
        id: 7,
        imageUrl:
          "http://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B004_404_SR_RT_GLBnew.jpg",
        imageUrl1:
          "http://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B189_002_SR_RT_GLB.jpg",
        title: "Asics Shoe",
        information: "Wear them with your casual outfits.",
        price: "$100.00",
        starsTotal: 5,
        rev: "90",
        paragraph:
          "This all new version of the popular GEL-Contend shoe is designed to provide ASICS hallmark performance through exceptional cushioning and great fit - ideal for entry-level or low mileage runners.",
        value3: "8 9 10 11",
        stock: "Out of Stock",
        starsActive: 4,
      },
      {
        id: 8,
        imageUrl:
          "https://images.jdmagicbox.com/quickquotes/images_main/reebok-women-s-running-speed-breeze-shoes-black-silver-cold-grey-size-5-160088622-dfazh.png",
        imageUrl1:
          "https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOOREEBOK-MEN-GSHOE74980D5EC1F52/1563408735272_1.JPG?imwidth=540&impolicy=hq",
        title: "Reebok Shoe",
        information: "Glam to your daily wardrobe rotation.",
        price: "$200.00",
        starsTotal: 5,
        rev: "100",
        paragraph:
          "Perfect to keep your feet comfortable throughout your running sessions, this pair of running shoes from Reebok ensures to provide you with the required performance. Its synthetic upper will offer the necessary stability and support to your feet, while the rubber sole will negate the chances of accidental slips.",
        value3: "8 9 10 11",
        stock: "In Stock",
        starsActive: 5,
      },
    ],
    Recommendations: [
      {
        id: 9,
        imageUrl:
          "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/t/q/2/-original-imagkqwzyzfahqac.jpeg?q=70",
        imageUrl1:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS-Ywjx3ee9OJf1tlJ8k_ty0ynjnv0KDeOq3e0OagEfaZDJmcn95UuBk8gUyCmrd2QLwOtjSf5lvMzWEP0UVmYheL0H8zqbNDdq8jniB-NX8l0WLOgkx1OS&usqp=CAE",
        title: "HP Laptop",
        color: "Black | White",
        information: "Stylish & Portable Thin and Light Laptop",
        price: "$700.00",
        strikedprice: "$750.00",
        stock: "In Stock",
        starsTotal: 5,
        paragraph:
          "HP 14s Intel Celeron Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 14s- dq3032tu Thin and Light Laptop  (14 Inch, Jet Black, 1.46 kg, With MS Office)",
        rev: "140",
        value3: "8 9 10 11",
        starsActive: 5,
      },
      {
        id: 10,
        imageUrl:
          "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=70",
        imageUrl1:
          "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/a/b/0/-original-imaghx9qnhzxegu2.jpeg?q=70",
        title: "APPLE iPhone 14",
        information: "17.02 cm (6.7 inch) Super Retina XDR Display",
        price: "$600.00",
        starsTotal: 5,
        color: "Black | Light Blue",
        stock: "In Stock",
        rev: "160",
        paragraph:
          "iPhone 14 Pro and 14 Pro Max. With Dynamic Island. Crash Detection. An innovative 48MP camera. And A16 Bionic.",
        value3: "8 9 10 11",
        strikedprice: "$650.00",
        starsActive: 4,
      },
      {
        id: 11,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-2_600x.png?v=1616562632",
        imageUrl1:
          "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img3_600x.png?v=1616562632",
        title: "boAt Rockerz 450",
        information: "Wireless Headphone with 40mm Massive Drivers",
        price: "$100.00",
        starsTotal: 5,
        rev: "190",
        color: "Black | Aqua",
        paragraph:
          "It’s time to rock your lives with Rockerz 450 Pro. Get astounded and feel every beat with these bluetooth headphones that are here to make music more fun. With 40mm drivers and the unbeatable boAt Signature sound, groove to your favourite music. Make work and workouts more fun with a mountainous playback time of 70 hours that never gives up on you.",
        value3: "8 9 10 11",
        stock: "Out of Stock",
        starsActive: 5,
      },
      {
        id: 12,
        imageUrl:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000",
        imageUrl1:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861336000",
        title: "AirPods Pro",
        information: "Active Noise Cancellation",
        price: "$200.00",
        color: "White",
        starsTotal: 5,
        rev: "110",
        paragraph:
          "AirPods are lightweight and offer a contoured design. They sit at just the right angle for comfort and to better direct audio to your ear. The stem is 33 per cent shorter than AirPods (2nd generation) and includes a force sensor to easily control music and calls.",
        strikedprice: "$220.00",
        value3: "8 9 10 11",
        stock: "In Stock",
        starsActive: 5,
      },
    ],
    Compares: [
      {
        id: 1,
        imageUrl:
          "https://assets.solesense.com/en/images/products/500/adidas-duramo-sl-cloud-white-gv9817_1.jpg",
        title: "Brand:",
        information: "Adidas Men White Running Shoes",
        price: "$100.00",
        strikedprice: "$110.00",
        value: "Adidas",
        type: "Type",
        value1: "Running",
        material: "Material",
        value2: "Polyester",
        size: "Size",
        value3: "8 9 10 11",
      },
      {
        id: 2,
        imageUrl:
          "https://assets.ajio.com/medias/sys_master/root/hd9/h97/13291632295966/-473Wx593H-460220300-coffeebrown-OUTFIT.jpg",
        title: "Brand:",
        information: "Brown Men Tracking Shoes",
        price: "$40.00",
        value: "Woodland",
        type: "Type",
        value1: "Tracking",
        material: "Material",
        value2: "Leather",
        size: "Size",
        value3: "6 7 8 9",
      },
      {
        id: 3,
        imageUrl:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/544603ac-af2f-440d-b80c-7a914146d56c/react-infinity-3-road-running-shoes-mMGgGZ.png",
        title: "Brand:",
        information: "Nike Air Force 1 '07 Men's Shoes",
        price: "$75.00",
        value: "Nike",
        type: "Type",
        value1: "Running",
        material: "Material",
        value2: "Nylon",
        size: "Size",
        value3: "5 7 8 10",
      },
    ],
  };

  render() {
    return (
      <CountContext.Provider value={this.state}>
        {this.props.children}
      </CountContext.Provider>
    );
  }
}

export const Consumer = CountContext.Consumer;
