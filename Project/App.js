import React from "react";
import ReactDOM from "react-dom/client"

/*
Header
    - Logo(Title)
    -Nav Items (Right Side)
    - Cart
Body
    - Search Br
    -Restrauntlist
        - RestauranCrad(many cards)
            - Image
            -Name
            -Rating
            Cusines
Footer
    - Link
    -Copyright

*/

const heading = React.createElement("h1",{},"Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);