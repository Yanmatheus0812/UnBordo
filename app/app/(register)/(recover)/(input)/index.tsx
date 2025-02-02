import Layout from '@/components/Layout';
import SafeAreaView from '@/components/SafeAreaView';
import { useRouter } from 'expo-router';
import { Text } from '@/components/ui/text';
import { BackHeader } from '@/components/ui/backheader';
import { Box } from '@/components/ui/box';
import { TextInput, View } from 'react-native';
import { Input } from '@/components/ui/input2';
import { Button } from '@/components/ui/button2';
import { useKeyboardVisible } from '@/components/KeyboardListener';

import SVGPirateThinkinginSide from '@/assets/images/pirate-thinking-side';
import SVGArrow from '@/assets/images/arrow';
import { useTwoRecoveryPassword } from '../recover-password';
import { Controller } from 'react-hook-form';
import { useRef } from 'react';
import { FormErrorMessage } from '@/components/ui/FormErrorMessage';

export default function Screen() {
  const router = useRouter();
  const hasKeyboard = useKeyboardVisible();
  const refInputCodeOne = useRef<TextInput>(null);
  const refInputCodeTwo = useRef<TextInput>(null);
  const refInputCodeThree = useRef<TextInput>(null);
  const refInputCodeFour = useRef<TextInput>(null);

  const pirateOriginal = {
    width: 278,
    height: 351,
  };

  const pirate = {
    keyboard: {
      width: pirateOriginal.width / 1.5,
      height: pirateOriginal.height / 1.5,
    },
    free: {
      width: pirateOriginal.width,
      height: pirateOriginal.height,
    },
  };

  const { form, mutation, handleSubmit } = useTwoRecoveryPassword();

  return (
    <SafeAreaView
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <BackHeader onPress={() => router.back()} label="Redefinir senha" />

      <View
        style={{
          width: '100%',
          flex: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flex: 3,
            width: '100%',
            zIndex: 2,
            padding: 15,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            rowGap: 10,
          }}
        >
          <Text>
            Digite as coordenadas do tesouro que te enviamos pelo e-mail!
          </Text>
          <View
            style={{
              backgroundColor: '#F5F6FA',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: 25,
            }}
          >
            <Controller
              control={form.control}
              name="code"
              render={({ field: { onChange, value } }) => {
                const onChangeCode = (index: number, nV: string) => {
                  const nValue = value.split('');
                  nValue[index] = nV;
                  onChange(nValue.join(''));
                };

                return (
                  <>
                    <Input
                      maxLength={1}
                      keyboardType="numeric"
                      variant="square"
                      value={value[0]}
                      ref={refInputCodeOne}
                      onChangeText={(value) => {
                        onChangeCode(0, value);
                        if (value) {
                          console.log(refInputCodeTwo);
                          refInputCodeTwo.current?.focus();
                        }
                      }}
                    />
                    <Input
                      maxLength={1}
                      keyboardType="numeric"
                      variant="square"
                      value={value[1]}
                      ref={refInputCodeTwo}
                      onChangeText={(newValue) => {
                        onChangeCode(1, newValue);
                        if (newValue) {
                          refInputCodeThree.current?.focus();
                        }

                        if (
                          value.length === 2 &&
                          newValue.length === 0 &&
                          refInputCodeOne.current
                        ) {
                          refInputCodeOne.current.focus();
                        }
                      }}
                    />
                    <Input
                      maxLength={1}
                      keyboardType="numeric"
                      variant="square"
                      value={value[2]}
                      ref={refInputCodeThree}
                      onChangeText={(newValue) => {
                        onChangeCode(2, newValue);
                        if (newValue) {
                          refInputCodeFour.current?.focus();
                        }
                        if (
                          value.length === 3 &&
                          newValue.length === 0 &&
                          refInputCodeTwo.current
                        ) {
                          refInputCodeTwo.current.focus();
                        }
                      }}
                    />
                    <Input
                      maxLength={1}
                      keyboardType="numeric"
                      variant="square"
                      value={value[3]}
                      ref={refInputCodeFour}
                      onChangeText={(newV) => {
                        onChangeCode(3, newV);
                        if (
                          value.length === 4 &&
                          newV.length === 0 &&
                          refInputCodeThree.current
                        ) {
                          refInputCodeThree.current.focus();
                        }
                      }}
                    />
                  </>
                );
              }}
            />
          </View>
          <FormErrorMessage errors={form.formState.errors} path="code" />
        </View>
        <View
          style={{
            flex: 4,
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            position: 'relative',
          }}
        >
          <SVGPirateThinkinginSide
            width={hasKeyboard ? pirate.keyboard.width : pirate.free.width}
            height={hasKeyboard ? pirate.keyboard.height : pirate.free.height}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}
          />
          <Button
            variant="circle"
            onPress={form.handleSubmit(handleSubmit)}
            style={{
              margin: 20,
              marginBottom: '25%',
            }}
            isLoading={form.formState.isSubmitting || mutation.isPending}
          >
            <SVGArrow size={24} />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
