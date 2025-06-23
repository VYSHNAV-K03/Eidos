import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const materials = [
  {
    category: "Cloth Materials",
    items: [
      {
        name: "Cotton",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ671nfLQ7y9sC8rVvihp5RkTmW5M6jB1-ZroH5ztdkdX2WCnEnWVOLLre8fKaPOY7kSBc&usqp=CAU",
        recycledProducts:
         [{name:"Recycled Fabric",description : "Used for make new clothes and upholstrey"},
           {name:"Paper",description :"Cotton fibers are repurposed into high-quality papers"},
           {name: "Compost",description :"Organic cotton can be composted to enrich soil "}]
      },
      {
        name: "Denim",
        image: "https://st.depositphotos.com/2127699/2253/i/950/depositphotos_22538079-stock-photo-denim-fabric-texture-light-blue.jpg",
        recycledProducts: [
          {name:"Insulation",description:"Used in home insulation materials"},
          {name: "Rugs",description:"Repurposed into stylish and durable floor rugs"},
          {name: "Handmade Paper",description:"Processed into artisanal paper products"}]
      },
      {
        name: "Polyester",
        image: "https://www.swagify.com/blog/wp-content/uploads/2024/02/Polyster-fabric.jpg",
        recycledProducts: [
          {name:"New Polyester Fabric",description:"Melted and re-spun fresh polyster threads"},
          {name: "Carpets",description:"Used in making new carpet fibers"},
          {name: "Stuffing",description:"Reused in cushion,pillows,and toys"}
        ]
      },
      {
        name: "Silk",
        image: "https://britexfabrics.com/cdn/shop/products/img_1023.jpg?v=1684071294",
        recycledProducts: [
          {name:"Luxury Paper",description:"Repurposed into high-quality textured papers used for premium stationary"},
          {name: "Bio-based Fibers",description:"Converted for sustainable textiles"},
          {name: "Protein Extraction",description:"Used in cosmetics,biomedical applications etc.."}]
      },
      {
        name: "Jeans",
        image: "https://s3.envato.com/files/400403493/Happyb_0014.jpg",
        recycledProducts: [
          {name:"New Denim Fabric",description:"Regenerated into fresh high-quality denim quality"},
          {name: "Insulation",description:"Repurposed into eco-freindly insulations"},
          {name: "Bags",description:"Reproduced into stylish and durable bags,backpacks,etc.."}]
      },
      {
        name: "Wool",
        image: "https://www.noras-shop.com/cdn/shop/files/33E2765C-CF4A-4AD6-A874-F7B264947290_300x300.jpg?v=1729689425",
        recycledProducts: [
          {name:"Recycled Wool Fabric",description:"Old wool sorted,cleaned,and re-spun into new yarns"},
          {name: "Felt",description:"Compressed and bonded to make dense and durable felt used in fashion"},
          {name: "Insulation",description:"Repurposed into natural insulation for buildings"}]
      },
      {
        name: "Nylon",
        image: "https://www.tvfinc.com/wp-content/uploads/2023/05/100440.jpg",
        recycledProducts: [
          {name:"New Nylon Fabric",description:"Reproduced into high-quality fibers"},
          {name: "Fishing Nets",description:"Regenerated into durable nets"},
          {name: "Industrial Ropes",description:"Transformed into heavy-duty ropes"}]
      }
    ]
  },
  {
    category: "E-Waste Materials",
    items: [
      {
        name: "Circuit Boards",
        image: "https://how2electronics.com/wp-content/uploads/2020/04/13.jpg",
        recycledProducts: [
          {name:"Metal Extraction",description:"Precious and base metals like gold,silver are recovered from old circuit boards"},
          {name: "New Circuit Boards",description:"Reproduced into new,eco-friendly circuit boards "},
          {name: "Decorative Items",description:"Creatively repurposed into unique decorative pieces such as wall art,jewels etc.."}]
      },
      
      {
        name: "Batteries",
        image: "https://thumbs.dreamstime.com/b/collection-old-used-batteries-different-sizes-electric-waste-toxic-materials-causing-harm-to-ecosystems-human-332055982.jpgg",
        recycledProducts: [
          {name:"New Batteries",description:"Old batteries are refined and repurposed into new battery cells"},
          {name: "Metal Alloys",description:"Extracted metals such as aluminium,steel are melted and blended to form metal alloy"},
          {name: "Industrial Chemicals",description:"Metal refining processes yields essential industrial chemical"}]
      },
      {
        name: "Wires & Cables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8fRZNavN0Qw1cKXLvdH14skvDJrmp_d10w&s",
        recycledProducts: [
          {name:"Copper Wires",description:"Reprocessed into high quality electrical wires"},
          {name: "Insulation Materials",description:"Discarded electrical components such as rubber,plastic are repurposed into insulations of wires"},
          {name: "Electrical Components",description:"Reused to manufacture new electrical components"}]
      },
      {
        name: "Old Mobile Phones",
        image: "https://static.toiimg.com/thumb/msid-112338151,width-400,resizemode-4/112338151.jpg",
        recycledProducts: [
          {name:"Extracted Precious Metals",description:"Metals like gold,silver are refined and reused in new electroics,jewels"},
          {name: "Refurbished Devices",description:"Repaired and upgraded for resale extending their lifespan"},
          {name: "Electronic Components",description:"Tested,reburished and reused in manufacturinf"}]
      },
      {
        name: "Old Computers",
        image: "/images/old_computer.jpg",
        recycledProducts: [
          {name:"Extracted Metals",description:"Repurporsed for use in construction,sutomotive"},
          {name: "Reused Computer Parts",description:"Integrated into new or upgraded computers"},
          {name: "Plastic Components",description:"Processed into raw materials for manufacturing new electronic"}]
      },
      {
        name: "Television Sets",
        image: "https://media.istockphoto.com/id/475000796/photo/old-used-and-obsolete-electronic-equipment.jpg?s=612x612&w=0&k=20&c=KOPVpcuzYAYl5duFSeyh0-Dl38OcijWXvUdwLQHX-h4=",
        recycledProducts: [
          {name:"Glass Recycling",description:"Cleaned,crushed,and,melted to create new glass products"},
          {name: "Plastic Parts",description:"Processed into rew materails for manufacturing new products"}, 
          {name:"Metal Extraction",description:"Refined and reused in construction,transportation"}]
      }
      
    ]
  }
];

const RecyclableMaterials = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Recyclable Materials & Their Products</h1>
      
      {materials.map((category, index) => (
        <div key={index} className="mb-5">
          <h2 className="text-primary mb-3">{category.category}</h2>
          <div className="row">
            {category.items.map((item, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <ul className="list-group list-group-flush">
                      {item.recycledProducts.map((product, id) => (
                        <li key={id} className="list-group-item">
                          <strong>{product.name}:</strong> {product.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="d-flex justify-content-center gap-4 mt-4">
        <button className="btn btn-primary btn-lg" onClick={() => navigate("/sell")}>Sell Now</button>
        <button className="btn btn-success btn-lg" onClick={() => navigate("/shop")}>Buy Now</button>
      </div>
    </div>
  );
};

export default RecyclableMaterials