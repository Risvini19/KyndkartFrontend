import React, { useState } from 'react';
import { Image, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Text, Pressable } from 'react-native';

interface OTPVerificationScreenProps {
  otpValues: string[];
  handleOtpChange: (text: string, index: number) => void;
  onVerify: () => void;
}

export default function KyndKartApp() {
  const [currentScreen, setCurrentScreen] = useState('login'); // 'login', 'register', 'otp', or 'home'
  const [email, setEmail] = useState('');
  
  // Screen navigation handlers
  const handleLogin = () => setCurrentScreen('otp');
  const handleVerify = () => setCurrentScreen('home');
  const handleLogout = () => setCurrentScreen('login');
  const handleGoToRegister = () => setCurrentScreen('register');
  const handleGoToLogin = () => setCurrentScreen('login');
  
  // Render the appropriate screen
  if (currentScreen === 'home') {
    return <HomeScreen onLogout={handleLogout} />;
  } else if (currentScreen === 'register') {
    return <RegisterScreen onRegisterComplete={(email) => {
      setEmail(email);
      setCurrentScreen('otp');
    }} onGoToLogin={handleGoToLogin} />;
  } else if (currentScreen === 'otp') {
    return <OTPVerificationScreen email={email} onVerify={handleVerify} onResend={() => {}} />;
  } else {
    return <LoginScreen onLogin={(email) => {
      setEmail(email);
      handleLogin();
    }} onGoToRegister={handleGoToRegister} />;
  }
}

function HomeScreen({ onLogout }: { onLogout: () => void }) {
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
              {/* Left leaf */}
              <View style={styles.leftLeaf}></View>
              {/* Right leaf */}
              <View style={styles.rightLeaf}></View>
            </View>
          </View>
          <Text style={styles.appName}>KyndKart</Text>
          
          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        
        {/* Bottom curved background */}
        <View style={styles.bottomCurve} />
      </View>
    </SafeAreaView>
  );
}

function LoginScreen({ onLogin, onGoToRegister }: { onLogin: (email: string) => void; onGoToRegister: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() !== '') {
      onLogin(email);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        <View style={styles.loginContainer}>
          {/* Logo */}
          <View style={styles.logoPlaceholder}>
            <View style={styles.logoInner}>
              {/* Left leaf */}
              <View style={styles.leftLeaf}></View>
              {/* Right leaf */}
              <View style={styles.rightLeaf}></View>
            </View>
          </View>
          
          {/* Login Title */}
          <Text style={styles.loginTitle}>Login To Your Account</Text>
          
          {/* Email Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          
          {/* Password Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          
          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Sign in</Text>
          </TouchableOpacity>
          
          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.dividerLine} />
          </View>
          
          {/* Register Link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account yet? </Text>
            <TouchableOpacity onPress={onGoToRegister}>
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Bottom curved background */}
        <View style={styles.bottomCurve} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function RegisterScreen({ onRegisterComplete, onGoToLogin }: { onRegisterComplete: (email: string) => void; onGoToLogin: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (email.trim() !== '') {
      onRegisterComplete(email);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        <View style={styles.loginContainer}>
          {/* Logo */}
          <View style={styles.logoPlaceholder}>
            <View style={styles.logoInner}>
              {/* Left leaf */}
              <View style={styles.leftLeaf}></View>
              {/* Right leaf */}
              <View style={styles.rightLeaf}></View>
            </View>
          </View>
          
          {/* Register Title */}
          <Text style={styles.loginTitle}>Create New Account</Text>
          
          {/* Name Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
          </View>
          
          {/* Email Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          
          {/* Password Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          
          {/* Confirm Password Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput
              style={[styles.input, styles.highlightedInput]}
              placeholder="Confirm Password"
              placeholderTextColor="#999"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          
          {/* Register Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
            <Text style={styles.loginButtonText}>Next</Text>
          </TouchableOpacity>
          
          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.dividerLine} />
          </View>
          
          {/* Login Link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Already have an account? </Text>
            <TouchableOpacity onPress={onGoToLogin}>
              <Text style={styles.registerLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Bottom curved background */}
        <View style={styles.bottomCurve} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function OTPVerificationScreen({ email, onVerify, onResend }: { email: string; onVerify: () => void; onResend: () => void }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  
  // Handle OTP input change
  interface OTPVerificationScreenProps {
    email: string;
    onVerify: () => void;
    onResend: () => void;
  }

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    
    // Auto focus next input
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  
  // Handle key press to enable backspace navigation
  const handleKeyPress = (e: { nativeEvent: { key: string } }, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        <View style={styles.otpContainer}>
          {/* Logo */}
          <View style={styles.logoPlaceholder}>
            <View style={styles.logoInner}>
              {/* Left leaf */}
              <View style={styles.leftLeaf}></View>
              {/* Right leaf */}
              <View style={styles.rightLeaf}></View>
            </View>
          </View>
          
          {/* OTP Title */}
          <Text style={styles.otpTitle}>OTP Verification</Text>
          
          {/* OTP Instructions */}
          <Text style={styles.otpInstructions}>
            Enter 4 digit code sent to your{'\n'}
            E-mail <Text style={styles.emailHighlight}>{email}</Text>
          </Text>
          
          {/* OTP Input Fields */}
          <View style={styles.otpInputContainer}>
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.otpInput}
                value={otp[index]}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
              />
            ))}
          </View>
          
          {/* Resend Code */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't receive a code? </Text>
            <TouchableOpacity onPress={onResend}>
              <Text style={styles.resendLink}>Resend.</Text>
            </TouchableOpacity>
          </View>
          
          {/* Verify Button */}
          <TouchableOpacity style={styles.verifyButton} onPress={onVerify}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
        
        {/* Bottom curved background */}
        <View style={styles.bottomCurve} />
      </KeyboardAvoidingView>
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
    zIndex: -1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    marginBottom: 20,
  },
  logoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: '#006E29',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  logoInner: {
    width: 80,
    height: 80,
    borderRadius: 16,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftLeaf: {
    position: 'absolute',
    left: 18,
    width: 20,
    height: 38,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    transform: [{ rotate:'-45deg' }],
  },
  rightLeaf: {
    position: 'absolute',
    right: 18,
    width: 20,
    height: 38,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    transform: [{ rotate: '45deg' }],
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006E29',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#006E29',
    borderRadius: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#F8F8F8',
  },
  highlightedInput: {
    borderColor: '#006E29',
    borderWidth: 2,
  },
  forgotPassword: {
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: '#006E29',
    fontSize: 14,
  },
  loginButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#006E29',
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#666',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    fontSize: 16,
    color: '#333',
  },
  registerLink: {
    fontSize: 16,
    color: '#006E29',
    fontWeight: 'bold',
  },
  otpTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#006E29',
    marginBottom: 10,
  },
  otpInstructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  emailHighlight: {
    fontWeight: 'bold',
    color: '#006E29',
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#006E29',
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#F8F8F8',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  resendText: {
    fontSize: 16,
    color: '#333',
  },
  resendLink: {
    fontSize: 16,
    color: '#006E29',
    fontWeight: 'bold',
  },
  verifyButton: {
    paddingVertical: 15,
    backgroundColor: '#006E29',
    borderRadius: 10,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
