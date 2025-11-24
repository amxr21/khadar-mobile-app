import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
const HeaderImage = require("../../assets/images/header.png");

import { SafeAreaView } from "react-native-safe-area-context";
import Alarm from "./Alarm";
import UserIcon from "./UserIcon";

export default function Header({ data }){
    return (
        <>
            {/* <View className='flex flex-row w-full'>
                <View id='UserIcon' className='min-w-16 min-h-16 w-16 h-16 rounded-3xl bg-white'>
                </View>
                <View id='Header' className='flex w-full'>
                    <Text>{data?.userName || "Universit y"}</Text>
                </View>
            </View> */}


            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <SafeAreaView style={{height: 240, overflow: 'hidden',position: 'relative'}} className="py-10 px-6">
                <Image source={HeaderImage} style={{position:'absolute',inset:0, zIndex: 0 , width: 'full', height: 'fit'}}/>
                <View style={{width: '100%', height: 'auto', padding: 0,}} className="flex flex-row gap-4 w-full">
                    {/* <Text style={{color: 'white'}}>Test</Text>             */}
                    <View className="flex flex-row gap-4 w-11/12">
                        <UserIcon userType={data?.userType || 'private institution'} />
                        <View id='Header' className=' flex flex-col gap-1 w-9/12'>
                            <Text className="text-[1.6rem] font-semibold text-white">{data?.userName || "Universit Of Sharjah"}</Text>
                            <Text className="text-white font-light">Last Updated: </Text>
                        </View>

                    </View>
                    <View className="w-1/12">
                        <Alarm />

                    </View>

                </View>
            </SafeAreaView>
        </>
    )
}