import React from 'react'
import { TextInput, TextInputProps, useTheme } from 'react-native-paper'

export default function FlatTextInput({ marginTop = 10, ...props }: { marginTop?: number } & TextInputProps) {
    let clr = useTheme().colors;
    return (
        <TextInput
            {...props}
            className="w-full"
            style={{ marginTop, backgroundColor: clr.background }}
            mode="flat"
            outlineColor={clr.primary}
            outlineStyle={{ borderRadius: 10, borderWidth: 0 }}
        />
    );
}


