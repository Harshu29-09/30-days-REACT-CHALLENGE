import React from "react";
import Product from "./Pages/Product";

function ProductDetails() {
  let pdname ="MACBOOK";
  let pd =
    "The MacBook family was initially housed in designs similar to the iBook and PowerBook lines which preceded them, now making use of a unibody aluminum construction first introduced with the MacBook Air. This new construction also has a black plastic keyboard that was first used on the MacBook Air, which itself was inspired by the sunken keyboard of the original polycarbonate MacBooks. The now standardized keyboard brings congruity to the MacBook line, with black keys on a metallic aluminum body The lids of the MacBook family are held by a magnet with no mechanical latch, a design element first introduced with the polycarbonate MacBook. The Memory, drives, and batteries were accessible in the old MacBook lineup, though the newest compact lineup solders or glues all such components in place. All of the current MacBooks feature backlit keyboards.The MacBook was discontinued from February 2012 until March 2015, when a new model featuring an ultraportable design and an all-metal enclosure was introduced. It was again discontinued in July 2019 following a price reduction of the 3rd generation MacBook Air and discontinuation of the 2nd generation model.As part of the Mac transition to Intel processors, Apple released a 13-inch laptop simply named MacBook, as a successor to the PowerPC-based iBook series of laptops. During its existence, it was the most affordable Mac, serving as an entry-level laptop that was less expensive than the rest of the Mac laptop lineup (the MacBook Pro portable workstation, and later the MacBook Air ultra-portable). It was aimed at the consumer and education markets. Successive revisions of the MacBook were sold to consumers between May 2006 and July 2011, by which time it been superseded by the MacBook Air which had a lower entry price.[2] Apple continued to sell the MacBook to educational institutions until February 2012.[3][4] During its existence, it was the best-selling Mac in Apple's history. For five months in 2008, it was the best-selling laptop of any brand in US retail stores.[5] Collectively, the MacBook brand was the world's top-selling line of premium laptops.[6] There have been three separate designs of this MacBook. The original design used a combination of polycarbonate and fiberglass casing which was modeled after the iBook G4. The second design, introduced in October 2008 alongside the 15-inch MacBook Pro, shared the latters unibody aluminium casing, but lacked a FireWire port. A third design, introduced in late 2009, retained a similar unibody construction but changed back to white polycarbonate.";

    let pconclusion = "Why is MacBook better than PC-> 'Users often feel that Macs perform better than PCs. Apple produces its own hardware and operating system, meaning the two are designed to work together seamlessly. Additionally, macOS is generally considered more stable than Windows. Meanwhile, PCs with varying hardware configurations run Windows OS.'";
  return (
      <Product 
      name={pdname}
      about={pd}
      conclusion={pconclusion} />
  );
}

export {ProductDetails};
