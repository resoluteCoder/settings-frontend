import React, { useEffect, useState } from 'react';
import Skeleton from '@redhat-cloud-services/frontend-components/Skeleton';
import ErrorState from '@redhat-cloud-services/frontend-components/ErrorState';
import PageHeader, {
    PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import Main from '@redhat-cloud-services/frontend-components/Main';
import NotAuthorized from '@redhat-cloud-services/frontend-components/NotAuthorized';
import Repos from './Repos';
import { Popover, Button } from '@patternfly/react-core';
import QuestionCircleIcon from '@patternfly/react-icons/dist/js/icons/outlined-question-circle-icon';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
//import { register } from '../../store';
//import reducers from '../../store/reducers';
//import { notificationsReducer } from '@redhat-cloud-services/frontend-components-notifications/redux';
//import { getSchema, saveValues, getConfig } from '../../actions';
//import { RenderForms } from '../../PresentationalComponents';
const EdgeSettings = () => {
    const [isOrgAdmin, setIsOrgAdmin] = useState(undefined);
    const hasError = false;
    const configLoaded = true;

    useEffect(() => {
        insights.chrome.auth
            .getUser()
            .then((user) => setIsOrgAdmin(user.identity.user.is_org_admin));
    }, []);
    return (
        <>
            <PageHeader>
                <>
                    <PageHeaderTitle title='Applications settings' />
                    {isOrgAdmin &&
                        (configLoaded ? (
                            <p className='pf-u-mt-sm'>
                                Settings for Fleet Management
                                <Popover
                                    aria-label='Basic popover'
                                    headerContent={
                                        <div>About Fleet Management</div>
                                    }
                                    bodyContent={
                                        <div>
                                            Fleet Management is a service that
                                            allows you to provision, update and
                                            maintain edge systems.
                                        </div>
                                    }
                                    footerContent={
                                        <Button
                                            variant='link'
                                            style={{ 'padding-left': 0 }}
                                        >
                                            <a href='#'>Documentation</a>
                                            <ExternalLinkAltIcon className='pf-u-ml-sm' />
                                        </Button>
                                    }
                                >
                                    <QuestionCircleIcon
                                        style={{ cursor: 'pointer' }}
                                        className='pf-u-ml-xs'
                                    />
                                </Popover>
                            </p>
                        ) : (
                            <Skeleton size='sm' />
                        ))}
                </>
            </PageHeader>
            {typeof isOrgAdmin === 'boolean' && !hasError && (
                <Main>
                    {isOrgAdmin ? (
                        <Repos />
                    ) : (
                        <NotAuthorized serviceName={startCase(appName)} />
                    )}
                </Main>
            )}
            {hasError && <ErrorState />}
        </>
    );
};

export default EdgeSettings;
