import React, { useState, useRef } from 'react';
import { 
  StyleSheet, 
  View, 
  SafeAreaView, 
  Text, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';

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
    return <RegisterScreen onRegisterComplete={(email: string) => {
      setEmail(email);
      setCurrentScreen('otp');
    }} onGoToLogin={handleGoToLogin} />;
  } else if (currentScreen === 'otp') {
    const [otpValues, setOtpValues] = useState(['', '', '', '']);
    
    const handleOtpChange = (text: string, index: number) => {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = text;
      setOtpValues(newOtpValues);
    };

    return <OTPVerificationScreen email={email} otpValues={otpValues} handleOtpChange={handleOtpChange} onVerify={handleVerify} onResend={() => {}} />;
  } else {
    return <LoginScreen onLogin={(email) => {
      setEmail(email);
      handleLogin();
    }} onGoToRegister={handleGoToRegister} />;
  }
}

// Updated app logo component that will be consistent across all screens
function AppLogo() {
  return (
    <View style={styles.logoPlaceholder}>
      <View style={styles.logoInner}>
        {/* Leaf elements for the new logo */}
        <View style={styles.leftLeaf}></View>
        <View style={styles.rightLeaf}></View>
      </View>
    </View>
  );
}

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
          {/* Updated Logo */}
          <AppLogo />
          
          {/* Main Title */}
          <Text style={styles.appName}>KyndKart</Text>
          <Text style={styles.mainTitle}>Want To Share Food?</Text>
          
          {/* Option Cards */}
          <View style={styles.optionsContainer}>
            {/* Donate Option */}
            <View style={styles.optionCard}>
              <View style={styles.optionIconContainer}>
                <View style={styles.handsIcon}>
                  <View style={styles.droplet}></View>
                  <View style={styles.leftHand}></View>
                  <View style={styles.rightHand}></View>
                </View>
              </View>
              <Text style={styles.optionTitle}>Donate Your Food</Text>
              <Text style={styles.optionSubtitle}>Donate Your Food</Text>
            </View>
            
            {/* Receive Option */}
            <View style={styles.optionCard}>
              <View style={styles.receiveIconContainer}>
                <View style={styles.handshakeIcon}>
                  <View style={styles.leftHandshake}></View>
                  <View style={styles.rightHandshake}></View>
                </View>
              </View>
              <Text style={styles.optionTitle}>Receive Your Food</Text>
              <Text style={styles.optionSubtitle}>Routes usable food</Text>
            </View>
          </View>
          
          {/* Logout Button - Repositioned above illustration */}
          <TouchableOpacity style={styles.logoutButtonNew} onPress={onLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
          
          {/* Improved Illustration - Simple Food Sharing Scene */}
          <View style={styles.improvedIllustration}>
            {/* Table */}
            <View style={styles.foodTable}></View>
            
            {/* Food plate */}
            <View style={styles.foodPlate}>
              {/* Food items */}
              <View style={styles.foodItem1}></View>
              <View style={styles.foodItem2}></View>
              <View style={styles.foodItem3}></View>
            </View>
            
            {/* People */}
            <View style={styles.personLeft}>
              <View style={styles.personHead}></View>
              <View style={styles.personBody}></View>
            </View>
            
            <View style={styles.personRight}>
              <View style={styles.personHead}></View>
              <View style={styles.personBody}></View>
            </View>
            
            {/* Sharing arrow */}
            <View style={styles.sharingArrow}></View>
          </View>
          
          {/* Bottom Banner */}
          <View style={styles.bottomBanner}>
            <Text style={styles.bannerText}>I'm so hungry, need some food!</Text>
          </View>
        </View>
        
        {/* Bottom curved background */}
        <View style={styles.bottomCurve} />
      </View>
    </SafeAreaView>
  );
}

interface LoginScreenProps {
  onLogin: (email: string) => void;
  onGoToRegister: () => void;
}

function LoginScreen({ onLogin, onGoToRegister }: LoginScreenProps) {
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
          {/* Updated Logo */}
          <AppLogo />
          
          {/* App Name */}
          <Text style={styles.appName}>KyndKart</Text>
          
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

interface RegisterScreenProps {
  onRegisterComplete: (email: string) => void;
  onGoToLogin: () => void;
}

function RegisterScreen({ onRegisterComplete, onGoToLogin }: RegisterScreenProps) {
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
          {/* Updated Logo */}
          <AppLogo />
          
          {/* App Name */}
          <Text style={styles.appName}>KyndKart</Text>
          
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

interface OTPVerificationScreenProps {
  email: string;
  onVerify: () => void;
  onResend: () => void;
}

function OTPVerificationScreen({ email, onVerify, onResend }: OTPVerificationScreenProps) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  
  // Handle OTP input change
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
          {/* Updated Logo */}
          <AppLogo />
          
          {/* App Name */}
          <Text style={styles.appName}>KyndKart</Text>
          
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
  logoPlaceholder: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8F5F0',
    borderRadius: 50,
    marginBottom: 20,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    zIndex: 1,
},
loginContainer: {
  flex: 1,
  paddingHorizontal: 30,
  paddingTop: 80,
  zIndex: 1,
  alignItems: 'center',
},
otpContainer: {
  flex: 1,
  paddingHorizontal: 30,
  paddingTop: 80,
  zIndex: 1,
  alignItems: 'center',
},
  logoInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // New leaf logo elements
  leftLeaf: {
    position: 'absolute',
    left: 15,
    width: 20,
    height: 40,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    transform: [{ rotate: '-30deg' }],
  },
  rightLeaf: {
    position: 'absolute',
    right: 15,
    width: 20,
    height: 40,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    transform: [{ rotate: '30deg' }],
  },
  // Old utensil logo elements (keeping for reference)
  spoon: {
    position: 'absolute',
    left: 20,
    width: 4,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 2,
    display: 'none', // Hide old logo elements
  },
  fork: {
    position: 'absolute',
    left: 40,
    width: 4,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 2,
    display: 'none', // Hide old logo elements
  },
  knife: {
    position: 'absolute',
    left: 60,
    width: 4,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 2,
    display: 'none', // Hide old logo elements
  },
  arrow: {
    position: 'absolute',
    top: 50,
    width: 20,
    height: 20,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: 'white',
    transform: [{ rotate: '45deg' }],
    display: 'none', // Hide old logo elements
  },
  // Old logout button (keeping for reference)
  logoutButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#006E29',
    borderRadius: 20,
    zIndex: 10,
    display: 'none', // Hide old logout button
  },
  // New logout button positioned where requested
  logoutButtonNew: {
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 50,
    backgroundColor: '#FF5733', // Changed to orange for better visibility
    borderRadius: 25,
    alignItems: 'center',
    width: '80%',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006E29',
    marginBottom: 40,
    marginTop: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  optionCard: {
    alignItems: 'center',
    width: '45%',
  },
  optionIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#006E29',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  receiveIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#006E29',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  handsIcon: {
    position: 'relative',
    width: 50,
    height: 50,
  },
  droplet: {
    position: 'absolute',
    top: 5,
    left: 20,
    width: 10,
    height: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  leftHand: {
    position: 'absolute',
    bottom: 10,
    left: 8,
    width: 8,
    height: 20,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    transform: [{ rotate: '-30deg' }],
  },
  rightHand: {
    position: 'absolute',
    bottom: 10,
    right: 8,
    width: 8,
    height: 20,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    transform: [{ rotate: '30deg' }],
  },
  handshakeIcon: {
    position: 'relative',
    width: 50,
    height: 50,
  },
  leftHandshake: {
    position: 'absolute',
    bottom: 15,
    left: 10,
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: '#006E29',
    borderRadius: 5,
    transform: [{ rotate: '45deg' }],
  },
  rightHandshake: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: '#006E29',
    borderRadius: 5,
    transform: [{ rotate: '-45deg' }],
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#006E29',
    textAlign: 'center',
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  // Old illustration styles (keeping for reference)
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 70,
    display: 'none', // Hide old illustration
  },
  tableContainer: {
    width: 200,
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    display: 'none', // Hide old illustration
  },
  table: {
    width: 160,
    height: 20,
    backgroundColor: '#8B4513',
    borderRadius: 5,
    position: 'absolute',
    bottom: 30,
    display: 'none', // Hide old illustration
  },
  personContainer: {
    position: 'relative',
    height: 120,
    width: 80,
    alignItems: 'center',
    display: 'none', // Hide old illustration
  },
  personBody: {
    width: 40,
    height: 60,
    backgroundColor: '#F98866',
    borderRadius: 10,
    position: 'absolute',
    bottom: 40,
  },
  personHead: {
    width: 35,
    height: 35,
    backgroundColor: '#FFCC99',
    borderRadius: 20,
    position: 'absolute',
    top: 0,
    alignItems: 'center',
  },
  leftEye: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    borderRadius: 2.5,
    position: 'absolute',
    top: 10,
    left: 8,
    display: 'none', // Hide old illustration
  },
  rightEye: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    borderRadius: 2.5,
    position: 'absolute',
    top: 10,
    right: 8,
    display: 'none', // Hide old illustration
  },
  hungryMouth: {
    width: 15,
    height: 10,
    backgroundColor: '#FF6666',
    borderRadius: 5,
    position: 'absolute',
    bottom: 5,
    display: 'none', // Hide old illustration
  },
  emptyPlate: {
    width: 30,
    height: 30,
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    position: 'absolute',
    bottom: 20,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    display: 'none', // Hide old illustration
  },
  // New improved illustration
  improvedIllustration: {
    width: '100%',
    height: 150,
    position: 'relative',
    marginBottom: 60,
  },
  foodTable: {
    width: '80%',
    height: 15,
    backgroundColor: '#8B4513',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: '10%',
  },
  foodPlate: {
    width: 60,
    height: 60,
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    position: 'absolute',
    bottom: 35,
    left: '50%',
    marginLeft: -30,
    borderWidth: 2,
    borderColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodItem1: {
    width: 20,
    height: 15,
    backgroundColor: '#FF9966',
    borderRadius: 5,
    position: 'absolute',
    top: 10,
  },
  foodItem2: {
    width: 25,
    height: 10,
    backgroundColor: '#90EE90',
    borderRadius: 5,
    position: 'absolute',
    bottom: 15,
    left: 10,
  },
  foodItem3: {
    width: 15,
    height: 15,
    backgroundColor: '#FFC0CB',
    borderRadius: 7.5,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  personLeft: {
    position: 'absolute',
    bottom: 40,
    left: '20%',
  },
  personRight: {
    position: 'absolute',
    bottom: 40,
    right: '20%',
  },
  sharingArrow: {
    position: 'absolute',
    top: 40,
    left: '50%',
    marginLeft: -15,
    width: 30,
    height: 30,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderColor: '#006E29',
    transform: [{ rotate: '45deg' }],
  },
  bottomBanner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#006E29',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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
    paddingVertical: 15,
    backgroundColor: '#006E29',
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: 15,
    width: '100%',
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
    width: '100%',
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
    width: '100%',
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
    width: '100%',
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
    paddingHorizontal: 40,
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