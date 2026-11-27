import { createBrowserRouter } from 'react-router';
import { AuthLayout } from '@/layouts/AuthLayout/AuthLayout';
import { MainLayout } from '@/layouts/MainLayout/MainLayout';
import { LoginPage } from '@/pages/Login/LoginPage';
import { ForgotPasswordPage } from '@/pages/ForgotPassword/ForgotPasswordPage';
import { ResetPasswordPage } from '@/pages/ResetPassword/ResetPasswordPage';
import { HomePage } from '@/pages/Home/HomePage';
import { MessagesPage } from '@/pages/Messages/MessagesPage';
import { ProfilePage } from '@/pages/Profile/ProfilePage';
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage';
import { SearchPage } from '@/pages/Search/SearchPage';
import { ConversationPage } from '@/pages/Conversation/ConversationPage';
import { WelcomePage } from '@/pages/Welcome/WelcomePage';
import { PeoplePage } from '@/pages/People/PeoplePage';
import { ColleaguePage } from '@/pages/Colleague/ColleaguePage';
import { NewGroupPage } from '@/pages/Group/NewGroupPage';
import { NewChatPage } from '@/pages/NewChat/NewChatPage';
import { NotificationsLayout } from '@/components/notifications/NotificationsLayout';
import { GroupInfoPage } from '@/pages/Group/GroupInfoPage';
import { AddGroupMembersPage } from '@/pages/Group/AddGroupMembersPage';
import { RedirectIfAuthenticated, RequireAuth, RequireOnboarding, RootRoute } from './guards/AuthGuards';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    element: <RootRoute />,
    errorElemenֻǱ˞