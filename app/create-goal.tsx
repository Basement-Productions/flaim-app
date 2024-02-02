import * as React from 'react';
import { Text } from 'react-native-paper';
import { useState } from 'react';
import Wrapper from './components/Wrapper';
import { View } from 'react-native';


export default function Feed() {

    return (
        <Wrapper title={"Create Goal"} leftIcon='back'>
            <View className="justify-center items-center h-full w-full">
                <Text>CREATE GOAL</Text>
            </View>
        </Wrapper>
    );
};
