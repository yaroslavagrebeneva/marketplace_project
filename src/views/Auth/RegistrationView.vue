<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="8" lg="6">
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Registration</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field prepend-icon="mdi-account" name="email" label="Email" type="email"
                                v-model="email" :rules="emailRules">
                            </v-text-field>
                            <v-text-field prepend-icon="mdi-lock" name="password" label="Password" type="password"
                                v-model="password" :rules="passwordRules"></v-text-field>
                            <v-text-field prepend-icon="mdi-lock" name="confirm-password" label="Confirm Password"
                                type="password" v-model="confirmPassword" :rules="confirmPasswordRules"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="onSubmit" :loading="loading" :disabled="!valid || loading">
                            Create Account
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <!-- Snackbar для показа ошибок -->
        <v-snackbar v-model="errorSnackbar" multi-line :timeout="3000" color="error">
            {{ errorMessage }}
            <template v-slot:actions>
                <v-btn variant="text" @click="errorSnackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
            valid: false,
            errorSnackbar: false,
            errorMessage: "",
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must be at least 6 characters'
            ],
            confirmPasswordRules: [
                v => !!v || 'Confirm password is required',
                v => v === this.password || 'Passwords must match'
            ]
        };
    },
    computed: {
        loading() {
            return this.$store.getters.loading;
        }
    },
    methods: {
        async onSubmit() {
            if (!this.$refs.form.validate()) return; // Проверяем валидацию

            const user = {
                email: this.email,
                password: this.password
            };

            try {
                await this.$store.dispatch("registerUser", user);
                this.$router.push("/");
            } catch (error) {
                this.errorMessage = error.message || "Ошибка регистрации";
                this.errorSnackbar = true;
            }
        }
    }
};
</script>
