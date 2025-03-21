import React, { useState } from 'react';
import { Image, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Text, Pressable } from 'react-native';

interface OTPVerificationScreenProps {
  otpValues: string[];
  handleOtpChange: (text: string, index: number) => void;
  onVerify: () => void;
}


export default function App() {
  // State to manage different screens
  const [currentScreen, setCurrentScreen] = useState('login'); // login, home, forgotPassword, otpVerification, resetPassword, success
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [newPassword, setNewPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(20);

  // Navigation handlers
  const handleLogin = () => {
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setCurrentScreen('login');
  };

  const handleForgotPassword = () => {
    setCurrentScreen('forgotPassword');
  };

  const handleSendOTP = () => {
    setCurrentScreen('otpVerification');
    // Start timer logic would go here
  };

  const handleVerifyOTP = () => {
    setCurrentScreen('resetPassword');
  };

  const handleResetPassword = () => {
    setCurrentScreen('success');
  };

  const handleDone = () => {
    setCurrentScreen('login');
  };

  const handleCreateAccount = () => {
    setCurrentScreen('success');
  };

  // OTP input handler
  const handleOtpChange = (text: string, index: number) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = text;
    setOtpValues(newOtpValues);
  };

  // Render different screens based on state
  switch (currentScreen) {
    case 'home':
      return <HomeScreen onLogout={handleLogout} />;
    case 'forgotPassword':
      return <ForgotPasswordScreen contactInfo={contactInfo} setContactInfo={setContactInfo} onSendOTP={handleSendOTP} />;
    case 'otpVerification':
      return <OTPVerificationScreen otpValues={otpValues} handleOtpChange={handleOtpChange} onVerify={handleVerifyOTP} />;
    case 'resetPassword':
      return <ResetPasswordScreen 
        newPassword={newPassword} 
        setNewPassword={setNewPassword} 
        confirmPassword={confirmPassword} 
        setConfirmPassword={setConfirmPassword} 
        onConfirm={handleResetPassword} 
      />;
    case 'success':
      return <SuccessScreen onDone={handleDone} />;
    case 'login':
    default:
      return (
        <LoginScreen 
          username={username} 
          setUsername={setUsername} 
          password={password} 
          setPassword={setPassword} 
          onLogin={handleLogin} 
          onForgotPassword={handleForgotPassword}
          onCreateAccount={handleCreateAccount} 
        />
      );
  }
}

// Login Screen Component
interface LoginScreenProps {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onLogin: () => void;
  onForgotPassword: () => void;
  onCreateAccount: () => void;
}

function LoginScreen({ username, setUsername, password, setPassword, onLogin, onForgotPassword, onCreateAccount }: LoginScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        {/* Logo and welcome text */}
        <View style={styles.logoContainer}>
          {/* Logo */}
          <View style={styles.logoPlaceholder}>
            <View style={styles.logoInner}>
              <View style={styles.logoLeaf}></View>
              <View style={styles.logoChart}></View>
            </View>
          </View>
          
          <Text style={styles.welcomeText}>Hi Dear,</Text>
          <Text style={styles.loginText}>Login To Your Account</Text>
        </View>
        
        {/* Login Form */}
        <View style={styles.formContainer}>
          {/* Username Input */}
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <View style={styles.userIcon} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          
          {/* Password Input */}
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <View style={styles.lockIcon} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          
          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotContainer} onPress={onForgotPassword}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          
          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          
          {/* Or Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.divider} />
          </View>
          
          {/* Create Account */}
          <View style={styles.createAccountContainer}>
            <Text style={styles.noAccountText}>Don't have any accounts? </Text>
            <TouchableOpacity onPress={onCreateAccount}>
              <Text style={styles.createAccountText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Home Screen Component
interface HomeScreenProps {
  onLogout: () => void;
}

function HomeScreen({ onLogout }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        {/* Logo and app name */}
        <View style={styles.logoContainer}>
          {/* Using a placeholder View instead of requiring an image that might not exist */}
          <View style={styles.logoPlaceholder}>
            <View style={styles.logoInner}>
              <View style={styles.logoLeaf}></View>
              <View style={styles.logoChart}></View>
            </View>
          </View>
          <Text style={styles.appName}>KyndKart</Text>
        </View>
        
        {/* Logout button */}
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
        
        {/* Bottom curved background */}
        <View style={styles.bottomCurve} />
      </View>
    </SafeAreaView>
  );
}

// Forgot Password Screen Component
interface ForgotPasswordScreenProps {
  contactInfo: string;
  setContactInfo: (contactInfo: string) => void;
  onSendOTP: () => void;
}

function ForgotPasswordScreen({ contactInfo, setContactInfo, onSendOTP }: ForgotPasswordScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        {/* Logo and title */}
        <View style={styles.logoContainer}>
          <View style={styles.logoPlaceholder}>
            <View style={styles.logoInner}>
              <View style={styles.logoLeaf}></View>
              <View style={styles.logoChart}></View>
            </View>
          </View>
          <Text style={styles.pageTitle}>Forgot Password?</Text>
        </View>
        
        {/* Contact Input Form */}
        <View style={styles.formContainer}>
          {/* Email/Phone Input */}
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <View style={styles.lockIcon} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Mobile Number or Email Address"
              value={contactInfo}
              onChangeText={setContactInfo}
            />
          </View>
          
          {/* Send OTP Button */}
          <TouchableOpacity style={[styles.loginButton, {marginTop: 20}]} onPress={onSendOTP}>
            <Text style={styles.loginButtonText}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// OTP Verification Screen Component
function OTPVerificationScreen({ otpValues, handleOtpChange, onVerify }: OTPVerificationScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        {/* Logo and title */}
        <View style={styles.logoContainer}>
          <View style={styles.logoPlaceholder}>
            <View style={styles.logoInner}>
              <View style={styles.logoLeaf}></View>
              <View style={styles.logoChart}></View>
            </View>
          </View>
          <Text style={styles.pageTitle}>OTP Verification</Text>
        </View>
        
        {/* OTP Form */}
        <View style={styles.formContainer}>
          <Text style={styles.otpInstructions}>
            Enter 4 digit code sent to your{'\n'}
            E-mail risvini2001@gmail.com
          </Text>
          
          {/* OTP Input Boxes */}
          <View style={styles.otpContainer}>
            {otpValues.map((digit: string, index: number) => (
              <TextInput
              key={index}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="number-pad"
              value={digit}
              onChangeText={(text: string) => handleOtpChange(text, index)}
              />
            ))}
          </View>
          
          <Text style={styles.resendTimer}>Resend code in 20sec</Text>
          
          {/* Verify Button */}
          <TouchableOpacity style={[styles.loginButton, {marginTop: 20}]} onPress={onVerify}>
            <Text style={styles.loginButtonText}>Verify</Text>
          </TouchableOpacity>
          
          {/* Resend option */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't receive a code? </Text>
            <TouchableOpacity>
              <Text style={styles.resendLink}>Resend.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Reset Password Screen Component
interface ResetPasswordScreenProps {
  newPassword: string;
  setNewPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (password: string) => void;
  onConfirm: () => void;
}

function ResetPasswordScreen({ newPassword, setNewPassword, confirmPassword, setConfirmPassword, onConfirm }: ResetPasswordScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        {/* Logo and title */}
        <View style={styles.logoContainer}>
          <View style={styles.logoPlaceholder}>
            <View style={styles.logoInner}>
              <View style={styles.logoLeaf}></View>
              <View style={styles.logoChart}></View>
            </View>
          </View>
          <Text style={styles.pageTitle}>Reset Your Password</Text>
        </View>
        
        {/* Reset Password Form */}
        <View style={styles.formContainer}>
          {/* New Password Input */}
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter New Password"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
            />
          </View>
          
          {/* Confirm Password Input */}
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          
          {/* Confirm Button */}
          <TouchableOpacity style={[styles.loginButton, {marginTop: 20, width: '40%'}]} onPress={onConfirm}>
            <Text style={styles.loginButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Success Screen Component
interface SuccessScreenProps {
  onDone: () => void;
}

function SuccessScreen({ onDone }: SuccessScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        {/* Success Card */}
        <View style={styles.successCard}>
          {/* Success Icon */}
          <View style={styles.successIconContainer}>
            <View style={styles.checkmark}></View>
          </View>
          
          <Text style={styles.successTitle}>Success!</Text>
          <Text style={styles.successMessage}>
            Your Account has been{'\n'}
            Created Successfully
          </Text>
        </View>
        
        {/* Done Button */}
        <TouchableOpacity style={[styles.loginButton, {marginTop: 20, width: '40%'}]} onPress={onDone}>
          <Text style={styles.loginButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  topCurve: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30%',
    backgroundColor: '#E8F5F0',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  bottomCurve: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    backgroundColor: '#E8F5F0',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
 5    marginBottom: 20,
  },
  logoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#006E29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoLeaf: {
    position: 'absolute',
    left: 10,
    width: 25,
    height: 40,
    backgroundColor: '#006E29',
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  logoChart: {
    position: 'absolute',
    right: 10,
    width: 25,
    height: 40,
    backgroundColor: '#006E29',
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  loginText: {
    fontSize: 18,
    color: '#666',
  },
  formContainer: {
    width: '80%',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  iconContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#666',
    borderRadius: 10,
  },
  lockIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#666',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  forgotContainer: {
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#006E29',
  },
  loginButton: {
    backgroundColor: '#006E29',
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 100,
    marginVertical: 20,
    borderRadius: 8,
    width: '40%',
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCC',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#666',
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  noAccountText: {
    color: '#666',
  },
  createAccountText: {
    color: '#006E29',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
    width: '40%',
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 8,
  },
  otpInstructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
  },
  resendTimer: {
    marginTop: 10,
    textAlign: 'center',
    color: '#666',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  resendText: {
    color: '#666',
  },
  resendLink: {
    color: '#006E29',
    fontWeight: 'bold',
  },
  successCard: {
    alignItems: 'center',
    backgroundColor: '#E8F5F0',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  successIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#006E29',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    width: 25,
    height: 25,
    backgroundColor: '#FFF',
    borderRadius: 12.5,
  },
  successTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#006E29',
    marginTop: 10,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  successMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
});