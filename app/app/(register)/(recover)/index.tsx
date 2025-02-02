import SafeAreaView from '@/components/SafeAreaView';
import { useRouter } from 'expo-router';
import SVGPirateThinking from '@/assets/images/pirate-thinking';
import { BackHeader } from '@/components/ui/backheader';
import { View } from 'react-native';
import { Input } from '@/components/ui/input2';
import { Button } from '@/components/ui/button2';
import { useStepOneRecoveryPassword } from './recover-password';
import { Controller } from 'react-hook-form';
import { FormErrorMessage } from '@/components/ui/FormErrorMessage';

export default function Screen() {
  const router = useRouter();
  const { form, handleSubmit, mutation } = useStepOneRecoveryPassword();

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
        <View className="flex flex-1 w-full justify-end z-2 p-4">
          <Controller
            control={form.control}
            name="registration"
            render={({ field: { onChange, value } }) => (
              <Input
                keyboardType="numeric"
                label="Matrícula"
                placeholder="Digite aqui..."
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <FormErrorMessage errors={form.formState.errors} path="root" />
          <FormErrorMessage
            errors={form.formState.errors}
            path="registration"
          />
        </View>
        <View
          style={{
            flex: 2,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button
            onPress={form.handleSubmit(handleSubmit)}
            label="Continuar"
            variant="wide"
            isLoading={form.formState.isSubmitting || mutation.isPending}
            style={{
              width: '75%',
            }}
          ></Button>
          <SVGPirateThinking width={291} height={367} />
        </View>
      </View>
    </SafeAreaView>
  );
}
