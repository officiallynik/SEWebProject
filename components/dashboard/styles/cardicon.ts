import { Theme } from "@material-ui/core";
import { Styles } from "@material-ui/core/styles/withStyles";
import {
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader,
    grayColor
} from "./globalstyles";

const cardIconStyle: Styles<Theme, {}, string> = {
    cardIcon: {
        "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
            borderRadius: "3px",
            backgroundColor: grayColor[0],
            padding: "15px",
            marginTop: "-20px",
            marginRight: "15px",
            float: "left"
        }
    },
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader
};

export default cardIconStyle;
