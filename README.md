This is a demo to review the crash issue, including start a Metro server and run xcodebuild command. NEED NOT do anything else except following this README file.

direct to the root directory(AppDemo/), run below commands in terminal

1. run `yarn install`. // Install the denpendencies, react-native-image-crop-picker cause the crash which would be install in the step
2. run `yarn run start`. // Start the Metro server, maybe it's not necessary but could simplfy the process if so. And could see the output below

<img width="547" alt="image" src="https://github.com/user-attachments/assets/0efea893-b748-4b28-ad73-fa0fc93a6bf0">

3. watch the memory used change status before next step.
4. follow the output and press `i` to run xcodebuild automatically, the output was like below. Just wait and watch the memory used status.
   ```shell
   info Opening app on iOS...
   info A dev server is already running for this project on port 8081.
   info Found Xcode workspace "DemoApp.xcworkspace"
   info Found booted iPhone 16 Plus
   info Building (using "xcodebuild -workspace DemoApp.xcworkspace -configuration Debug -scheme DemoApp -destination id=43413535-9154-4DE0-9338-D4EEE2618120")
   ```

5. If every thing is normal, a process named XCBBuildService will be allocated more and more memories until get a crash log



BTW, [this pull](https://github.com/ivpusic/react-native-image-crop-picker/pull/2068) did repaired to avoid the crash, maybe it's helpful to locate the problem
