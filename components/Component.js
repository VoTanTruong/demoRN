import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getECData } from "../services/service";

const Text1 = () => {
    const [data, setData] = useState();
    useEffect(() => {
        getECData().then(res => setData(res))
    }, [])

    return (
        <View >
            {data && data.map((album, index) => {
                return <Text key={index}>{album.name}</Text>
            })}
        </View>
    );
};

export default Text1;