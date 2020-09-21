import React, { FC, useState } from 'react';

export interface GkeMetadata {
  projectId?: string;
  clusterName?: string;
}
export const GkeMetadataContext = React.createContext<GkeMetadata>({});
export const GkeMetadataProvider: FC<{}> = props => {
  const [metadata, setMetadata] = useState({});
  // useEffect(() => {
  //   Apis.getClusterName()
  //     .then(clusterName => setMetadata(metadata => ({ ...metadata, clusterName })))
  //     .catch(err => logger.warn(extendError(err, 'Failed getting GKE cluster name')));
  //   Apis.getProjectId()
  //     .then(projectId => setMetadata(metadata => ({ ...metadata, projectId })))
  //     .catch(err => logger.warn(extendError(err, 'Failed getting GKE project ID')));
  // }, []);
  return <GkeMetadataContext.Provider value={metadata} {...props} />;
};
