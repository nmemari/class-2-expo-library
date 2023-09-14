import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider, config, Slider, SliderTrack, SliderFilledTrack, SliderThumb, StyledProvider, Switch, Avatar , AvatarFallbackText, Button, ButtonText, ButtonIcon } from '@gluestack-ui/themed';

export default function Home() {
    return (
        <GluestackUIProvider config={config.theme}>
            <StyledProvider style={styles.avatar}>
                <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                    <AvatarFallbackText>Navid Memari</AvatarFallbackText>
                </Avatar>
                <Switch size="md" isDisabled={false} />
                <Slider
                    defaultValue={30}
                    size="lg"
                    orientation="horizontal"
                    isDisabled={false}
                    isReversed={false}
                >
                    <SliderTrack>
                        <SliderFilledTrack />
                        </SliderTrack>
                    <SliderThumb />
                </Slider>
                <Button
                    size="md"
                    variant="solid"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                >
                    <ButtonText>Add </ButtonText>
                    <ButtonIcon as={AddIcon} />
                </Button>
            </StyledProvider>
        </GluestackUIProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display:'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
});
