import { NavigatorScreenParams } from "@react-navigation/native";

export type BottomSheetStackParams = {
    'no-nav': undefined;
}

export type ExperimentsStackParams = {
    blank: undefined;
    'bottom-sheet': NavigatorScreenParams<BottomSheetStackParams>;
}
