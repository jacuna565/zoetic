import { StyleSheet} from "react-native";
import { colors } from "../../globals/styles";
const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding: 7
    },
    card:{
        height: '100%',
        borderRadius: 15,
        padding: 10
    },
    titleContainer:{
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row'
    },
    titleContainerCentered:{
        alignItems: 'center',
        alignSelf:'center',
        height: '100%',
        justifyContent: 'center'
    },
    iconTitle:{
        fontSize: 24,
        color: colors.white
    },
    iconTitleInvert:{
        color: colors.primaryColor,
        fontSize: 48
    },
    textTitle:{
        color: colors.white,
        fontSize: 16,
        marginLeft: 5
    },
    textTitleInvert:{
        color: colors.secondaryColor,
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default styles;