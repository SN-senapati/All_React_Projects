import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './Component/Login/login'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { DataBinding,Databinding,DataBinding3, Databinding4, DataBinding5} from './Component/data_binding/data-binding';
import { FormValidation } from "./Practice/practice"
import { DommyJson, Mobile } from "./Component/flipkart/mobiles"
import { EventBinding, MouseEvent, TwoWayBinding } from './Component/Event-Binding/event_binding';
import { MouseDemo } from './Component/mouse-demo/mouse-demo';
import { MouseMove } from './Component/mouse-move/mouse-move';
import { MouseMoveEx } from './Component/mouse-move/mouse-move-2eg';
import { KeyDemo,PswDemo } from './Component/key-demo/key-demo';
import { FocusDemo } from './Component/Element-State-Events/focus-blur-chnage';
import { ClipboardEvents } from './Component/clipboard-events/copy_paste';
import { DebounceDemo } from './Component/Debounce/debounce-demo';
import { Throttle } from './Component/Throttle/Throttle-demo';
import { Example } from './Component/Throttle/stop-watch';
import { TimerEvent } from './Component/Timer-Event/timer-event';
import { FetchProduct } from './Component/Fetch-API/fetch-product';
import { LoadingStatus } from './Component/Loading-status/loading-status';
import { FormEvent } from './Component/form-event/form-event';
import { FormikComponentDemo } from './Component/formik-component-demo/formik-component-demo';
import { ReactHookForm } from './Component/react-hook-form/react-hook-form';
import { StopWatchex } from './Component/StopWatch-Practice/stop-watch';
import { Navbar } from './Component/controlled-component/navbar';
import { DataGrid } from './Component/controlled-component/data-grid';
import { Demo } from './Component/controlled-demo/controlled-demo';
import { FakeStore } from './Component/FakeStore-Demo/fake_store';
import { ContextDemo } from './Component/context-demo/context-demo';
import { SearchProduct } from './Component/transport-data/search-product';
import { LifeCycle } from './Component/component-lify-cycle/life-cycle';
import { VideoTotorial } from './video-totorial/video-totorial';
import { FakeStoreIndex } from './Fakestore-shopping/fakestore-index';
import { CookiesProvider } from 'react-cookie';
import { VideoLibraryIndex } from './video-library/video-library-index';
import { MouseEventEx } from './Practice/practice-question';
import { UseReducerEx } from './hooks/useReducer';
import { SuspenseDemo } from './hooks/use';
import { ClassDemo } from './Component/class-component/class-demo';
import { KeyEvent } from './Practice/practice-2';
import { ElementStateEvent } from './Practice/practice-3';
import { ClipBoard } from './Practice/practice-4';
import { Another, PracticeDebouceDemo, PracticeDebounce } from './Practice/practice-5';
import { ThrottleEx } from './Practice/practice-6'
// import './index.css'
import './main.css'
import { FormEventEx,FormEventEx2 } from './Practice/practice-7';
import { Parent } from './Practice/parent-component/parent-component';
import { ControlledComponent } from './Practice/controlled&uncontrolled';
import { ContextApiDemo, ParentContainer } from './Practice/contextApi';
import { Appp, PropsDrilling } from './Practice/props-drilling';
import { PropsExample } from './Practice/props';
import { ChildToParent } from './Practice/child-to-parent';
import { VideoTutorialRouting } from './Practice/Routing-in-React/video-tutorial';
import { ShoppingIndex } from './Practice/mini-project-with-routing/Shopping-index';
import { TodoApp } from './mini-project/Todo-App';
import { Jepa } from './Practice/props/parent-component/jepa';
import { UseState } from './Practice/React-hooks/useState';
import { Grandparent } from './Practice/props-drilling/Grand-parent';
import { GrandContext } from './Practice/React-hooks/Context/GrandParentContext';
import { UseRef } from './Practice/React-hooks/useRef';
import { UseEffect } from './Practice/React-hooks/useEffect';
import { UseEffectTimer } from './Practice/React-hooks/useEffect-timer';
import { UseEffectTimerMain } from './Practice/React-hooks/useEffect-timer-main';
import { UseMemo } from './Practice/React-hooks/useMemo';
import {FormEventPractice} from './Practice/form-practice/form-event'
import { HookForm } from './Practice/form-practice/hook-form';
import { FormikWithReactHookForm } from './Practice/form-practice/formik&hookForm';
import { TodoAppNew } from './New-Todo-project/Todo-App-New';
import { UseStateEx } from './hooks/use-state';
import { UseEffectEx } from './hooks/use-Effect';
import { GrandParentX } from './hooks/props/GrandParent-x';
import { GrandParent } from './hooks/ContextAPI/Grand_Parent';
import { UseReference } from './hooks/use-Ref';
import { UseMemoEx } from './hooks/use_Memo';
import { UseCallback } from './hooks/useCallback';
import { UseReducerExmaple } from './hooks/use-Reducer';
import { UseLayoutEffect } from './hooks/useLayoutEffect';
import { DiceRoller } from './mini-project/Dice-Rolling-App/DiceRoller';
import { DiceRollingApp } from './mini-project/Dice-Rolling-App/DiceRollingAppMain';
// import App from './App.jsx'  


createRoot(document.getElementById('root')).render(
  <div>
    {/* <DataBinding/>
    <Databinding/>
    <DataBinding3/>
    <Databinding4/>
    <DataBinding5/> */}
    {/* <Mobile/>
    <DommyJson/> */}
    {/* <EventBinding></EventBinding>
    <TwoWayBinding></TwoWayBinding> */}
    {/* <MouseEvent></MouseEvent> */}
    {/* <MouseDemo/> */}
    {/* <MouseMove></MouseMove> */}
    {/* <MouseMoveEx/> */}
    {/* <KeyDemo/><PswDemo/> */}
    {/* <FocusDemo/> */}
    {/* <ClipboardEvents/>   */}
    {/* <DebounceDemo></DebounceDemo> */}
    {/* <Throttle/>
    <Example/>
    <TimerEvent/> */}
    {/* <FetchProduct/> */}
    {/* <LoadingStatus/> */}
    {/* <FormEvent/> */}
    {/* <FormikComponentDemo/> */}
    {/* <FormValidation/> */}
    {/* <ReactHookForm/> */}
    {/* <StopWatchex/> */}
    {/* <Navbar/> */}
    {/* <Demo/> */}
    {/* <FakeStore/> */}
    {/* <ContextDemo/> */}
    {/* <SearchProduct/> */}
    {/* <LifeCycle/> */}
    {/* <VideoTotorial/> */}
    {/* <FakeStoreIndex/> */}
      {/* <CookiesProvider>
          <VideoLibraryIndex/>
      </CookiesProvider> */}
      {/* <MouseEventEx/> */}
      {/* <UseReducerEx/> */}
      {/* <SuspenseDemo/> */}
      {/* <ClassDemo/> */}
      {/* <KeyEvent/> */}
      {/* <ElementStateEvent/> */}
      {/* <ClipBoard/> */}
      {/* <PracticeDebounce/>
      <PracticeDebouceDemo/>
      <Another></Another> */}
      {/* <ThrottleEx/> */}
      {/* <FormEventEx/>
      <FormEventEx2/> */}
      {/* <Parent/> */}
      {/* <ControlledComponent/> */}
      {/* <ContextApiDemo/> */}
      {/* <ParentContainer/> */}
      {/* <PropsDrilling/> */}
      {/* <Appp/> */}
      {/* <PropsExample/>
      <ChildToParent/> */}
      {/* <VideoTutorialRouting/> */}
      {/* <ShoppingIndex/> */}
      {/* <TodoApp/> */}
      {/* <Jepa/>
      <UseState/>
      <Grandparent/> */}
      {/* <UseEffect/>
      <GrandContext/>
      <UseRef/> */}
      {/* <UseEffectTimerMain/>
      <UseMemo/> */}
      {/* <FormEventPractice/> */}
      {/* <HookForm/> */}
      {/* <FormikWithReactHookForm/> */}
      {/* <TodoAppNew/> */}
      {/* <UseStateEx/> */}
      {/* <UseEffectEx/> */}
      {/* <GrandParentX/>
      <GrandParent/> */}
      {/* <UseReference/> */}
      {/* <UseMemoEx/> */}
      {/* <UseCallback/> */}
      {/* <UseReducerExmaple/> */}
      {/* <UseLayoutEffect/> */}
      {/* <DiceRoller/> */}
      <DiceRollingApp/>
  </div>
)
